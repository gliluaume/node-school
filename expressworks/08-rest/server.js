'use strict';

const port = parseInt(process.argv[2], 10);
const filename = process.argv[3];

const fs = require('fs');
const express = require('express');
const app = express();

console.log(filename);

app.listen(port);


app.get('/books', function(req, res) {
  fs.readFile(filename, function(err, data) {
    if (err) res.status(500).send('Error while reading file !')
    try {
      let obj = JSON.parse(data);
      res.json(obj);
    }
    catch(ex) {
      res.status(500).send('Error while parsing file !')
    }
  });
});