const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const router = express.Router();
/*  SPANK  */
//i will add it soon


/*  CHANGE MY MIND  */
/*
   it was hard so i didnt do it
*/


/*  HEAVEN  */
const heaven = async (user) => {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    const heaven = await loadImage(path.join(__dirname, '../img/heaven.jpg'));
    const userimg = await loadImage(user);
    // right, down, length, width 
    ctx.drawImage(heaven, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(userimg, 200, 390, 100, 90);


    return canvas.toBuffer('image/png');
};

router.get('/heaven', async (req, res) => {
    const { user } = req.query;

    if (!user) {
        return res.status(400).send('User url is required');
    }

    try {
        const imageBuffer = await heaven(user);
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating imae:', error);
        res.status(500).send('Error creating image');
    }
});

/*  PEEPO SIGN  */
// this has some bugs
const peeposign = async (text) => {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    const peepo = await loadImage(path.join(__dirname, '../img/peeposign.jpg'));
    ctx.drawImage(peepo, 0, 0, canvas.width, canvas.height);

    // Set text properties
    ctx.fillStyle = 'black'; // Text color
    ctx.font = 'bold 24px sans-serif'; // Font size and style
    ctx.textAlign = 'center'; // Center the text
//ty chatgpt
    const wrapText = (text, x, y, maxWidth, lineHeight) => {
        const words = text.split(' ');
        let line = '';

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    };

    const textX = canvas.width / 2;
    const textY = canvas.height - 460;
    const maxWidth = 450;
    const lineHeight = 30;

    wrapText(text, textX, textY, maxWidth, lineHeight);

    return canvas.toBuffer('image/png');
};

router.get('/peeposign', async (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).send('Text string are required');
    }

    try {
        const imageBuffer = await peeposign( text);
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

/*  GAY  */
//why are you gay?
const gayAvatar = async (user) => {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    const avatar = await loadImage(user);
    const rainbowFlag = await loadImage(path.join(__dirname, '../img/gay.png')); // Ensure this image has transparency

    ctx.drawImage(rainbowFlag, 0, 0, canvas.width, canvas.height);


    ctx.globalAlpha = 0.5; 

    const avatarSize = 500;
    const avatarX = (canvas.width - avatarSize) / 2; 
    const avatarY = (canvas.height - avatarSize) / 2;
    // right, down, length, width 

    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);

    ctx.globalAlpha = 1.0;

    return canvas.toBuffer('image/png');
};

router.get('/gay', async (req, res) => {
    const { user } = req.query;

    if (!user) {
        return res.status(400).send('Avatar URL is required');
    }

    try {
        const imageBuffer = await gayAvatar(user);
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer); // Send the generated image as PNG
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

/*  NOT STONKS  */
// buisness 
const notstonksImage = async (user) => {
    const canvas = createCanvas(500, 300);
    const ctx = canvas.getContext('2d');

    // Load images for slapper and slapped
    const userimg = await loadImage(user);
    const stonksbg = await loadImage(path.join(__dirname, '../img/notstonks.png'));


    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // right, down, length, width 
    ctx.drawImage(stonksbg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(userimg, 50, 30, 100, 90);


    return canvas.toBuffer('image/png');
};

router.get('/notstonks', async (req, res) => {
    try {
        const { user } = req.query;

        if (!user) {
            return res.status(400).send('User is required');
        }

        const imageBuffer = await notstonksImage(user);

        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

/*  STONKS  */

const stonksImage = async (user) => {
    const canvas = createCanvas(500, 300); // Set the canvas size
    const ctx = canvas.getContext('2d');

    // Load images for slapper and slapped
    const userimg = await loadImage(user);
    const stonksbg = await loadImage(path.join(__dirname, '../img/stonks.png'));


    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // right, down, length, width 
    ctx.drawImage(stonksbg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(userimg, 70, 30, 100, 90);


    return canvas.toBuffer('image/png');
};

router.get('/stonks', async (req, res) => {
    try {
        const { user } = req.query;

        if (!user) {
            return res.status(400).send('User is required');
        }

        const imageBuffer = await stonksImage(user);

        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

/*  SLAP  */

const slapImage = async (slapper, slapped) => {
    const canvas = createCanvas(500, 300); // Set the canvas size
    const ctx = canvas.getContext('2d');

    // Load images for slapper and slapped
    const slapperImg = await loadImage(slapper);
    const slappedImg = await loadImage(slapped);
    const slapbg = await loadImage(path.join(__dirname, '../img/batslap.png'));


    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(slapbg, 0, 0, canvas.width, canvas.height);
    // right, down, length, width 
    ctx.drawImage(slapperImg, 190, 60, 100, 100);
    ctx.drawImage(slappedImg, 300, 170, 109, 120);


    return canvas.toBuffer('image/png');
};

router.get('/slap', async (req, res) => {
    try {
        const { slapper, slapped } = req.query;

        if (!slapper || !slapped) {
            return res.status(400).send('Both slapper and slapped URLs are required');
        }

        const imageBuffer = await slapImage(slapper, slapped);

        // Set the content type to PNG
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).send('Error creating image');
    }
});

/*  GRAVE  */

const graveImage = async (userImagePath) => {
    const canvas = createCanvas(500, 300);
    const ctx = canvas.getContext('2d');

    const graveImgPath = path.join(__dirname, '../img/grave.jpg');
    const graveImg = await loadImage(graveImgPath);

    const userImg = await loadImage(userImagePath);

    ctx.fillStyle = '#A9A9A9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // right, down, length, width 
    ctx.drawImage(graveImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(userImg, 190, 60, 55, 80);

    return canvas.toBuffer('image/png');
};

module.exports = graveImage;


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
