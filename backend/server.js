const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true, // Enforces HTTPS URLs for Cloudinary resources
});

const app = express();

// Middleware to force HTTPS for all HTTP requests except preflight
app.use((req, res, next) => {
    // Only redirect if it's an HTTP request and not a preflight OPTIONS request
    if (req.protocol === 'http' && req.method !== 'OPTIONS') {
        res.redirect(301, 'https://' + req.headers.host + req.url);
    } else {
        next();
    }
});

// CORS Configuration
const corsOptions = {
    origin: function(origin, callback) {
        // Allow requests from the specific domain or allow any origin
        if (!origin || origin === 'https://olgaamaya.com') {
            callback(null, true); // Allow
        } else {
            callback(new Error('CORS policy: Not allowed by CORS policy'), false); // Block
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allow OPTIONS for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

// Handle preflight OPTIONS requests to ensure CORS headers are included
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://olgaamaya.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// Route to fetch media from Cloudinary
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        let { folders, folder, limit } = req.query;

        // Support both 'folders' (comma-separated) and 'folder' (single)
        if (!folders && folder) {
            folders = folder;
        }

        if (!folders) {
            console.error('Folders parameter is missing');
            return res.status(400).json({ error: "Folders parameter is required" });
        }

        console.log(`Fetching media for folders: ${folders}`);

        // Split folder names by commas and trim any spaces
        const folderList = folders.split(',').map(f => f.trim());
        const maxResults = limit ? parseInt(limit, 10) : 100;

        let mediaFiles = [];

        // Loop through each folder and fetch media items
        for (const folder of folderList) {
            console.log(`Requesting Cloudinary media from folder: ${folder}`);

            // Fetch media items from Cloudinary for the given folder
            const result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${folder}/`, // Adjusting the prefix based on folder name
                max_results: maxResults,
            });

            if (result.resources && result.resources.length > 0) {
                // Add the folder name to each media item in the result
                const folderMedia = result.resources.map((file) => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: 'auto', secure: true }), // Ensures HTTPS
                    alt: file.public_id,
                    folder: folder, // Include the folder name here
                }));

                // Concatenate the folder media with the existing media array
                mediaFiles = [...mediaFiles, ...folderMedia];
            } else {
                console.log(`No media found for folder: ${folder}`);
            }
        }

        // Respond with the media files (including the folder name)
        res.json(mediaFiles);
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});

// Define the server port
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});