const axios = require('axios'); // To make API requests
const cloudinary = require('cloudinary').v2; // To interact with Cloudinary

// Your Cloudinary configuration
cloudinary.config({
    cloud_name: 'doggr8zar',
    api_key: '784922346844417',
    api_secret: '2IJLRYEcyTAt0jDxV2-X68GsvGM',
});

// Your Clarifai API Key and other credentials
const clarifaiAPIKey = '068c739272ed45709e459e2e0cbecce4'; // Replace with your actual API key
const userId = 'l8uraxbc54y6'; // Your user ID
const appId = 'Content-Generation'; // Your app ID
const userAppId = `${userId}/${appId}`; // Constructed user_app_id
const clarifaiUrl = 'https://api.clarifai.com/v2/models/general-image-recognition/outputs';

// Keywords to include in the alt tag
const keywords = ['fashion stylist', 'fashion styling', 'costume design art direction', 'barcelona'];

// Function to generate alt text using Clarifai API
async function generateAltText(imageUrl) {
    try {
        const response = await axios.post(
            clarifaiUrl, {
                inputs: [{
                    data: {
                        image: {
                            url: imageUrl, // Using the image URL from Cloudinary
                        },
                    },
                }],
            }, {
                headers: {
                    Authorization: `Bearer ${clarifaiAPIKey}`,
                    'user_app_id': userAppId, // Include the user_app_id in the request headers
                },
            }
        );

        // If Clarifai response contains recognized concepts, we generate the alt text
        if (response.data.outputs && response.data.outputs.length > 0) {
            const concepts = response.data.outputs[0].data.concepts;
            let altText = concepts.map(concept => concept.name).join(', ');

            // Add the keywords to the alt text
            altText += ', ' + keywords.join(', ');

            // Trim the alt text to stay under 125 tokens (just to be safe)
            if (altText.length > 125) {
                altText = altText.slice(0, 125);
            }

            return altText;
        } else {
            console.log('No concepts returned from Clarifai API');
            return '';
        }
    } catch (error) {
        console.error('Error generating alt text:', error.response ? error.response.data : error);
        return '';
    }
}

// Function to update the alt text in Cloudinary for a specific image
async function updateImageAltText(publicId, altText) {
    try {
        const result = await cloudinary.api.update(
            publicId, // Cloudinary public ID (without the extension)
            {
                context: {
                    alt: altText,
                },
            }
        );
        console.log(`Successfully updated alt text for image ${publicId}`);
    } catch (error) {
        console.error('Error updating image alt text in Cloudinary:', error);
    }
}

// Function to fetch images from a folder using your API
async function fetchImagesFromFolder(folderName) {
    try {
        const response = await axios.get(`https://olgaamaya-y53u.onrender.com/api/get-cloudinary-media?folder=${folderName}`);

        console.log('Response data:', response.data); // Log the full response to inspect the structure
        return response.data; // Assuming this returns a list of image objects
    } catch (error) {
        console.error(`Error fetching images from folder ${folderName}:`, error);
        return [];
    }
}

// Main function to loop through your Cloudinary folders and process images
async function updateImagesWithAltText() {
    // Define the folder names you want to process
    const folderNames = ['lightbox_1', 'lightbox_2', 'lightbox_3', 'lightbox_4', 'lightbox_5', 'lightbox_6'];

    for (const folderName of folderNames) {
        console.log(`Processing folder: ${folderName}`);

        // Fetch all image objects from the current folder using the custom API
        const imageObjects = await fetchImagesFromFolder(folderName);

        for (const imageObj of imageObjects) {
            // Debugging: Log the structure of imageObj
            console.log('Image object structure:', imageObj);

            // Check if the image object has a 'src' property, and extract the URL
            if (imageObj && imageObj.src) {
                const imageUrl = imageObj.src; // Extract the image URL from the 'src' property
                const imageName = imageUrl.split('/').pop().split('.')[0]; // Extract the image public ID (filename without extension)
                console.log(`Processing image: ${imageName}`);

                const altText = await generateAltText(imageUrl); // Generate the alt text using Clarifai API

                if (altText) {
                    await updateImageAltText(imageName, altText); // Update Cloudinary with the new alt text
                }
            } else {
                console.error('Image object does not have a valid src property:', imageObj);
            }
        }
    }
}

// Start the process
updateImagesWithAltText();