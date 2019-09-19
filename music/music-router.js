const router = require('express').Router();

const Musician = require('./music-model.js');

router.get('/', (req, res) => {
    Musician.getArtist()
        .then(artist => {
            res.status(200).json(artist)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const artist = req.body;
    Musician.addArtist(artist)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Musician.deleteArtist(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;