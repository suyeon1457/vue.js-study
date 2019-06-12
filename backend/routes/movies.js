const fs = require('fs');
const path = require('path');

var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', function (req, res, next) {
  res.send(movies)
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var movie = movies.filter(function (movie) {
    return movie.id === id
  });
  res.send(movie)
});

router.post('/upload', function(req, res){
    let movie = req.body;
    console.log(movie);
    movie.year = Number(movie.year);

    // get path
    const myPath = path.join(__dirname, '..', 'movies.json');
    console.log('myPath:',myPath);
    // read file
    fs.readFile(myPath, 'utf8', (err, data)=>{
        let parsedData = JSON.parse(data);
        parsedData.push(movie);
        // console.log('data:',parsedData);
        fs.writeFile(myPath, JSON.stringify(parsedData), (err)=>{
            if (err) throw err;
            console.log('movies update complete!');
            res.send('end');
        });
    });

});

module.exports = router;
