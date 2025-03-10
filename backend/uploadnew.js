// Import required modules
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // To load the .env file

// Cloudinary configuration from .env file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Folder where you want to upload the file on Cloudinary
const folder = 'Lightbox_16'; // Specify the existing folder name in Cloudinary

// Function to upload files to Cloudinary
async function uploadFilesToCloudinary(filePaths) {
    try {
        for (const filePath of filePaths) {
            const fileName = path.basename(filePath, path.extname(filePath)); // Get file name without extension

            // Upload the video file to Cloudinary, specifying the folder
            const result = await cloudinary.uploader.upload(filePath, {
                folder: `IMG/${folder}`, // Specify the folder in Cloudinary (IMG/Lightbox_16)
                resource_type: 'video', // Explicitly specify the resource type as 'video'
                public_id: `${fileName}`, // Use just the file name for the public_id (without the folder structure in the public_id)
                transformation: [
                    { quality: 'auto' } // Apply the q_auto transformation for automatic quality optimization
                ]
            });

            // Construct the URL in the desired format (with no file extension and in the correct folder)
            const videoUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/q_auto/v1/${result.public_id}`;

            console.log(`File uploaded: ${fileName}`);
            console.log(`Cloudinary URL: ${videoUrl}`);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

// Path to the local files you want to upload
// Make sure the path to your desktop file is correct
const filesToUpload = [
    'C:\\Users\\leotr\\Desktop\\clarainfantevideo', // Replace with the correct path and ensure the file is .mp4
    // Add more files here if necessary
];

// Ensure the files exist and upload them
filesToUpload.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        uploadFilesToCloudinary([filePath]);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});