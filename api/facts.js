const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const factsFilePath = path.join(__dirname, '../json/facts.json');

// Get random fact from a specific category
router.get('/', (req, res) => {
    const category = req.query.category;

    fs.readFile(factsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading facts:', err);
            return res.status(500).send('Error reading facts');
        }

        const facts = JSON.parse(data);

        if (category && facts[`${category}Facts`]) {
            // Return a random fact from the requested category
            const categoryFacts = facts[`${category}Facts`];
            const randomFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
            res.json({ fact: randomFact });
        } else {
            // Return random facts from all categories if no category is provided
            const allFacts = [
                ...facts.catFacts,
                ...facts.birdFacts,
                ...facts.videoGameFacts,
                ...facts.humanFacts
            ];
            const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
            res.json({ fact: randomFact });
        }
    });
});

module.exports = router;
