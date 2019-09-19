const express = require("express");

const artistRouter = require('../music/music-router.js')

const server = express();

server.use(express.json());

server.use('/artists', artistRouter)

server.get('/', (req, res) => {
    res.status(200).json({ Message: "It's working!" });
})




module.exports = server;