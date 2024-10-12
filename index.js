const express = require('express');
const factsRouter = require('./api/facts');
const imagesRouter = require('./api/images');
const app = express();

const port = 3000;

// Routes
app.use('/facts', factsRouter);
app.use('/images', imagesRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
