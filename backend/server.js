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

// API Endpoint to fetch Cloudinary media based on the folder
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        const { folders, limit } = req.query;

        if (!folders) {
            console.error('Folders parameter is missing');
            return res.status(400).json({ error: "Folders parameter is required" });
        }

        console.log(`Fetching media for folders: ${folders}`);

        // Split the folders by commas and sanitize the folder names
        const folderList = folders.split(',').map(folder => folder.replace(/[^\w\s]/gi, ''));
        const maxResults = limit ? parseInt(limit, 10) : 100;

        // Initialize an empty array to hold the media items
        let mediaFiles = [];

        // Loop through each folder and fetch the media items
        for (const folder of folderList) {
            console.log(`Making request to Cloudinary for folder: ${folder}`);

            // Fetch resources from Cloudinary based on the folder name
            const result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${folder}/`,
                max_results: maxResults,
            });

            // If resources are found, map the result to include media data with folder name
            if (result.resources && result.resources.length > 0) {
                const folderMedia = result.resources.map((file) => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: 'auto' }),
                    alt: file.public_id,
                    folder: folder, // Include the folder name here
                }));

                // Push the folder media to the mediaFiles array
                mediaFiles = [...mediaFiles, ...folderMedia];
            } else {
                console.log(`No resources found for folder: ${folder}`);
            }
        }

        // Return the media files as a JSON response
        res.json(mediaFiles);
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});

// Start the server
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});