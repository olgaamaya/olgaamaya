const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const moment = require('moment-timezone');

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
                const folderMedia = result.resources.map((file) => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: 'auto', secure: true }),
                    alt: file.public_id,
                    folder: folder,
                }));

                mediaFiles = [...mediaFiles, ...folderMedia];
            } else {
                console.log(`No media found for folder: ${folder}`);
            }
        }

        res.json(mediaFiles);
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});

// Function to ping the server to keep it awake, avoiding pinging between 01:00 - 05:00
const wakeUpServer = async() => {
    const currentTimeInMadrid = moment.tz("Europe/Madrid");

    // Check if it's between 01:00 and 05:00, and skip the ping request
    if (currentTimeInMadrid.hour() >= 1 && currentTimeInMadrid.hour() < 5) {
        console.log('It is night time (01:00 - 05:00), skipping the ping request.');
        return;
    }

    try {
        // Send a ping to the server to keep it awake
        const response = await axios.get('https://new-vhym.onrender.com/ping');
        console.log('Ping sent to the server successfully.');
    } catch (error) {
        console.error('Error sending ping request:', error.message);
    }
};

// Function to handle the first ping after 05:00 (05:01 or after)
const sendFirstPingAfterFive = async() => {
    const currentTimeInMadrid = moment.tz("Europe/Madrid");

    // If the time is after 05:00 and the server was likely sleeping, send a first ping after 5
    if (currentTimeInMadrid.hour() === 5 && currentTimeInMadrid.minute() >= 1) {
        console.log('It is 05:01 or later. Sending first wake-up ping after 5:00.');
        await wakeUpServer();
    }
};

// First ping right after 05:01 (not exactly at 05:00, but just after)
sendFirstPingAfterFive();

// Ping the server every 15 minutes (900,000 ms) unless it's between 01:00 - 05:00
setInterval(wakeUpServer, 15 * 60 * 1000); // Every 15 minutes

// UptimeRobot API Ping Logic
const sendUptimeRobotPing = async() => {
    try {
        // The UptimeRobot API URL to send the ping to your monitor
        const pingApiUrl = `https://api.uptimerobot.com/v2/push`;

        const response = await axios.post(pingApiUrl, {
            api_key: process.env.UPTIME_API_KEY, // Your UptimeRobot API Key
            monitor_identifier: process.env.UPTIME_MONITOR_ID, // Your UptimeRobot Monitor ID
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.UPTIME_API_KEY}`, // Adding API key in header
            }
        });

        console.log('UptimeRobot ping sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending UptimeRobot ping:', error.message);
    }
};

// Send the first UptimeRobot ping right after 05:01 or when server starts
sendFirstPingAfterFive();
setInterval(sendUptimeRobotPing, 14 * 60 * 1000); // Ping every 15 minutes (you can adjust this interval)


// Start the server on a specific port (from .env or default to 10000)
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});