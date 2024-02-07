var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const ApiKey = process.env.CONNECTION_STRING;

router.get('/movies', (req, res) => {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ApiKey}`
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => res.json({ movies: data.results }))
        .catch(err => console.error('error:' + err));

})



module.exports = router;
