const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables from the .env file
dotenv.config();

// Cloudinary configuration using values from .env file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// CORS configuration to allow only requests from specific domain (e.g., olgaamaya.com)
const corsOptions = {
    origin: function(origin, callback) {
        console.log('Request Origin:', origin);
        if (!origin || origin === 'https://olgaamaya.com') {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: Not allowed by CORS policy'), false);
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Handle OPTIONS preflight requests explicitly
app.options('*', cors(corsOptions));

// /ping route to check if the server is awake
app.get('/ping', (req, res) => {
    res.status(200).send('Server is awake');
});

// Cloudinary media fetching route
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        let { folders, folder, limit } = req.query;

        if (!folders && folder) {
            folders = folder;
        }

        if (!folders) {
            console.error('Folders parameter is missing');
            return res.status(400).json({ error: "Folders parameter is required" });
        }

        console.log(`Fetching media for folders: ${folders}`);

        // Split folder names by commas and trim spaces
        const folderList = folders.split(',').map(f => f.trim());
        const maxResults = limit ? parseInt(limit, 10) : 100;

        let mediaFiles = [];

        // Loop through each folder and fetch media items from Cloudinary
        for (const folder of folderList) {
            console.log(`Requesting Cloudinary media from folder: ${folder}`);

            const result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${folder}/`, // Adjust the prefix based on the folder name
                max_results: maxResults,
            });

            if (result.resources && result.resources.length > 0) {
                const folderMedia = result.resources.map((file) => {
                    let media = {
                        type: file.resource_type, // 'video', 'image', etc.
                        alt: file.public_id, // Alternative text (could be improved)
                        folder: folder, // Folder the file belongs to
                    };

                    // Check if the resource is a video (e.g., MP4)
                    if (file.resource_type === 'video') {
                        media.src = cloudinary.url(file.public_id, {
                            resource_type: 'video',
                            quality: 'auto', // Quality auto-select
                            secure: true // Use HTTPS (secure URLs)
                        });
                    }
                    // Check if the resource is a GIF
                    else if (file.resource_type === 'image' && file.format === 'gif') {
                        media.src = cloudinary.url(file.public_id, {
                            resource_type: 'image',
                            format: 'gif',
                            secure: true
                        });
                    }
                    // Handle regular image types (e.g., jpg, png, etc.)
                    else {
                        media.src = cloudinary.url(file.public_id, {
                            quality: 'auto',
                            secure: true
                        });
                    }

                    return media;
                });

                mediaFiles = [...mediaFiles, ...folderMedia];
            } else {
                console.log(`No media found for folder: ${folder}`);
            }
        }

        // Send the final JSON response with media files
        res.json(mediaFiles);
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});


// UptimeRobot API Ping Logic
const sendUptimeRobotPing = async() => {
    // Log environment variables to check if they are loaded correctly
    console.log('Uptime API Key:', process.env.UPTIMEROBOT_API_KEY);
    console.log('Uptime Monitor ID:', process.env.UPTIMEROBOT_MONITOR_ID);

    try {
        console.log('Sending UptimeRobot Ping with payload:', {
            api_key: process.env.UPTIMEROBOT_API_KEY,
            monitors: process.env.UPTIMEROBOT_MONITOR_ID
        });

        // UptimeRobot API URL to send the ping to your monitor
        const pingApiUrl = 'https://api.uptimerobot.com/v2/push';

        // Send a POST request with your API key and monitor identifier
        const response = await axios.post(pingApiUrl, {
            api_key: process.env.UPTIMEROBOT_API_KEY, // Uptime API Key
            monitors: process.env.UPTIMEROBOT_MONITOR_ID // Monitor ID
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.UPTIMEROBOT_API_KEY}`, // Use API key in header
            }
        });

        console.log('UptimeRobot monitor info:', response.data);
    } catch (error) {
        console.error('Error sending UptimeRobot ping:', error.message);
        console.error('Response from UptimeRobot:', error.response ? error.response.data : 'No response data');
    }
};

// Ping the UptimeRobot monitor every 5 minutes
setInterval(sendUptimeRobotPing, 5 * 60 * 1000); // Every 5 minutes (24/7)

// Start the server on a specific port (from .env or default to 10000)
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});