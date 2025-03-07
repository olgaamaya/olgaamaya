const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// CORS Configuration (Allow all origins)
const corsOptions = {
    origin: '*', // This will allow all origins without restriction
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

// Middleware for CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        let { folders, folder, limit } = req.query;

        // Check if at least 'folder' or 'folders' is provided
        if (!folders && !folder) {
            return res.status(400).json({ error: "At least one of 'folders' or 'folder' is required" });
        }

        // Use 'folder' if 'folders' is not provided
        if (!folders && folder) {
            folders = folder;
        }

        const folderList = folders.split(',').map(f => f.trim());
        const maxResults = limit && !isNaN(limit) ? parseInt(limit, 10) : 500;

        let mediaFiles = [];

        // Loop through each folder and fetch media items
        for (const folder of folderList) {
            console.log(`Requesting Cloudinary media from folder: ${folder}`);

            let result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${folder}/`,
                max_results: maxResults,
            });

            // Handle pagination for Cloudinary API results
            while (result.next_cursor) {
                const nextResult = await cloudinary.api.resources({
                    type: "upload",
                    prefix: `IMG/${folder}/`,
                    max_results: maxResults,
                    next_cursor: result.next_cursor,
                });
                result.resources.push(...nextResult.resources);
            }

            if (result.resources && result.resources.length > 0) {
                // Map Cloudinary media to the required format
                const folderMedia = result.resources.map((file) => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: 'auto', secure: true }),
                    alt: file.public_id,
                    folder: folder,
                }));
                mediaFiles = [...mediaFiles, ...folderMedia];
            } else {
                // If no media found, add an empty array for the folder
                console.log(`No media found for folder: ${folder}`);
                mediaFiles.push({
                    folder: folder,
                    media: [] // Empty array for folders with no media
                });
            }
        }

        res.json(mediaFiles); // Respond with the media files for all folders
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({
            error: "Failed to fetch media",
            details: error.message, // Omit stack in production
        });
    }
});

// Start the server
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});