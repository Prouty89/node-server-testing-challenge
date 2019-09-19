const db = require('../data/dbConfig.js');

module.exports = {
    getArtist,
    addArtist,
    deleteArtist
}

function getArtist() {
    return db('artists');
}


function addArtist(dwarf) {
    return db('artists').insert(dwarf)
}


function deleteArtist(id) {
    return db('artists')
        .where({ id })
        .del()
}