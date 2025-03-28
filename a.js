import * as tf from '@tensorflow/tfjs-node'; // Import TensorFlow.js for Node.js
import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Function to load the model
async function loadModel() {
    try {
        // Change the URL to the path where your model is stored
        const model = await tf.loadLayersModel('file://path/to/your/model.json');
        console.log('Model loaded successfully!');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

// Function to process image URL (download and convert to tensor)
async function processImage(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        const imageTensor = tf.node.decodeImage(buffer);
        return imageTensor;
    } catch (error) {
        console.error('Error downloading or processing image:', error);
    }
}

// Function to predict the result for a given image
async function predictImage(model, imageTensor) {
    try {
        const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]); // Assuming input size is 224x224
        const normalizedImage = resizedImage.div(tf.scalar(255)); // Normalize pixel values
        const batchedImage = normalizedImage.expandDims(0); // Add batch dimension

        const predictions = model.predict(batchedImage); // Run prediction

        return predictions;
    } catch (error) {
        console.error('Error predicting image:', error);
    }
}

// Main function to process images
async function processImages(imageUrls) {
    try {
        const model = await loadModel(); // Load the model first

        for (let i = 0; i < imageUrls.length; i++) {
            const imageUrl = imageUrls[i];
            console.log(`Processing image: ${imageUrl}`);

            const imageTensor = await processImage(imageUrl); // Process the image
            const predictions = await predictImage(model, imageTensor); // Predict using the model

            if (predictions) {
                console.log(`Predictions for image ${i + 1}:`, predictions);
            } else {
                console.log(`Error in prediction for image ${i + 1}`);
            }
        }
    } catch (error) {
        console.error('Error in processing images:', error);
    }
}

// Example image URLs
const imageUrls = [
    'https://res.cloudinary.com/doggr8zar/image/upload/q_auto/v1/IMG/lightbox_15/eccomerce_148?_a=BAMCkGTG0',
    'https://res.cloudinary.com/doggr8zar/image/upload/q_auto/v1/IMG/lightbox_15/eccomerce_149?_a=BAMCkGTG0'
    // Add more URLs as needed
];

processImages(imageUrls); // Call the main function