// Import required modules
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Express app
const app = express();

// CORS configuration
const corsOptions = {
    origin: function(origin, callback) {
        // Uncomment the line below to allow all origins temporarily for debugging
        // callback(null, true);

        if (!origin || origin === 'https://olgaamaya.com') {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: Not allowed by CORS policy'), false);
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

// Middleware to handle CORS
app.use(cors(corsOptions));

// API Endpoint to fetch Cloudinary media based on folder(s)
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        const { folders, limit } = req.query;

        if (!folders) {
            console.error('Folders parameter is missing');
            return res.status(400).json({ error: "Folders parameter is required" });
        }

        console.log(`Fetching media for folders: ${folders}`);

        // Handle single or multiple folders
        const folderList = folders.includes(',') ? folders.split(',').map(folder => folder.trim()) : [folders.trim()];
        const maxResults = limit ? parseInt(limit, 10) : 100;

        // Log before fetching from Cloudinary
        console.log('Making request to Cloudinary...');
        let allMediaFiles = [];

        for (const folder of folderList) {
            const sanitizedFolder = folder.replace(/[^\w\s]/gi, ''); // Sanitize folder name

            // Make the request to Cloudinary API to fetch media resources
            const result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${sanitizedFolder}/`,
                max_results: maxResults,
            });

            // Log the result from Cloudinary for each folder
            console.log(`Cloudinary Response for ${folder}:`, result);

            if (result.resources && result.resources.length > 0) {
                const mediaFiles = result.resources.map((file) => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: 'auto' }),
                    alt: file.public_id,
                }));
                allMediaFiles = [...allMediaFiles, ...mediaFiles];
            }
        }

        // Return all the media files from all folders
        res.json(allMediaFiles);

    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});

// Start the server on the defined port
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});