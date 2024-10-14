const express = require('express');
const factsRouter = require('./api/facts');
const imagesRouter = require('./api/images');
const app = express();

const port = 3000;

// Routes
app.use('/facts', factsRouter); // text facts
app.use('/images', imagesRouter); // images :p

const apijson = {
    discord: "https://discord.gg/2AJAMKsa3U",
    readme: "This api was created for Discord bots and fun stuffs.",
    apiurl: "https://api.com/",
    endpoints: [
        "GET images/slap?slapper=AVATAR_URL&slapped=AVATAR_URL",
//        "GET images/changemymind?text=TEXT",
//        "GET images/ejected?name=TEXT&impostor=BOOL&crewmate=black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow",
        "GET images/grave?user=AVATAR_URL",
        "GET images/heaven?user=AVATAR_URL",
        "GET images/peeposign?text=TEXT",
        "GET images/stonks?user=AVATAR_URL",
        "GET images/notstonks?user=AVATAR_URL",
        "GET facts?category=cat|videogames|birds|human"
      ],
};

app.get('/', (req, res) => {
    res.json(apijson);
});

app.listen(port, () => {
    console.log(`Random API is running at localhost:${port}`);
});
