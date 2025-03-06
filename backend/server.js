require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const path = require("path");

const app = express();

// ✅ Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Middleware to Force HTTPS (except OPTIONS requests)
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        return next(); // Allow preflight requests without redirect
    }
    if (req.protocol === "http" && !req.secure && process.env.NODE_ENV !== "development") {
        return res.redirect(301, "https://" + req.headers.host + req.url);
    }
    next();
});

// ✅ Enable CORS
app.use(cors({
    origin: ["https://olgaamaya.com", "https://olgaamaya.github.io"], // Add allowed domains
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
}));

// ✅ Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// ✅ Cloudinary API Route
app.get("/api/get-cloudinary-media", async(req, res) => {
    try {
        let folders = req.query.folders; // Read query parameter

        if (!folders || folders.trim() === "") {
            return res.status(400).json({ error: "Folders parameter is required" });
        }

        console.log(`Fetching media for folders: ${folders}`);

        const folderList = folders.split(',').map(f => f.trim()); // Ensure valid folder names
        let mediaFiles = [];

        for (const folder of folderList) {
            console.log(`Requesting Cloudinary media from folder: ${folder}`);

            const result = await cloudinary.api.resources({
                type: "upload",
                prefix: `IMG/${folder}/`, // Adjust prefix according to Cloudinary structure
                max_results: 100,
            });

            if (result.resources) {
                const folderMedia = result.resources.map(file => ({
                    type: file.resource_type,
                    src: cloudinary.url(file.public_id, { quality: "auto", secure: true }),
                    alt: file.public_id,
                    folder: folder,
                }));

                mediaFiles = [...mediaFiles, ...folderMedia];
            }
        }

        res.json(mediaFiles);
    } catch (error) {
        console.error("Error fetching Cloudinary media:", error);
        res.status(500).json({ error: "Failed to fetch media", details: error.message });
    }
});

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Olga Amaya API");
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});