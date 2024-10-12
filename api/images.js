const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const router = express.Router();

// Function to slap
const slapImage = async (slapper, slapped) => {
    const canvas = createCanvas(500, 300); // Set the canvas size
    const ctx = canvas.getContext('2d');

    // Load images for slapper and slapped
    const slapperImg = await loadImage(slapper);
    const slappedImg = await loadImage(slapped);

    // Draw background (optional)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw slapper and slapped images
    ctx.drawImage(slapperImg, 50, 50, 150, 150); // slapper
    ctx.drawImage(slappedImg, 300, 50, 150, 150); // slapped

    // Draw slap motion (hand)
    ctx.beginPath();
    ctx.arc(250, 125, 50, 0, Math.PI * 2, true); // Slap circle
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.fill();

    return canvas.toBuffer('image/png');
};

// API endpoint for slap
router.get('/slap', async (req, res) => {
    try {
        const { slapper, slapped } = req.query;

        if (!slapper || !slapped) {
            return res.status(400).send('Both slapper and slapped URLs are required');
        }

        // Generate the slap image
        const imageBuffer = await slapImage(slapper, slapped);

        // Set the content type to PNG
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

// Function to generate a grave image
const graveImage = async (user) => {
    const canvas = createCanvas(500, 300);
    const ctx = canvas.getContext('2d');

    // Load user image
    const userImg = await loadImage(user);

    // Draw background (gray like a grave)
    ctx.fillStyle = '#A9A9A9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the user's image on the grave
    ctx.drawImage(userImg, 150, 50, 200, 200);

    // Draw text like "RIP"
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('R.I.P.', 200, 270);

    return canvas.toBuffer('image/png');
};

// API endpoint for grave
router.get('/grave', async (req, res) => {
    try {
        const { user } = req.query;

        if (!user) {
            return res.status(400).send('User image URL is required');
        }

        // Generate the grave image
        const imageBuffer = await graveImage(user);

        // Set the content type to PNG
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

module.exports = router;
