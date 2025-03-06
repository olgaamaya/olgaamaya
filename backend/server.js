const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const app = express();

// CORS Configuration - Allow both domains
const allowedOrigins = [
    'https://olgaamaya.com', // olgaamaya.com domain
    'https://olgaamaya.github.io/olgaamaya/', // GitHub Pages domain
];

const corsOptions = {
    origin: (origin, callback) => {
        // Check if the request origin is in the allowedOrigins array
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allow GET, POST, and OPTIONS methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow credentials (cookies, authorization headers)
};

// Apply CORS configuration globally
app.use(cors(corsOptions));

// Route to fetch media from Cloudinary
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        let { folders, folder, limit } = req.query;

        // Support both 'folders' (comma-separated) and 'folder' (single)
        if (!folders && folder) {
            folders = folder;
        }

        if (!folders) {
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
            }).catch((error) => {
                console.error("Error fetching from Cloudinary:", error);
                return { resources: [] }; // Return an empty array in case of error
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