'use strict';

const port = parseInt(process.argv[2], 10);
const dir = process.argv[3];

const fs = require('fs');
const express = require('express');


let app = express();
app.listen(port);

app.get('/index.html', function(req, res) {
  fs.readFile(dir + '/index.html', function(error, fileBuffer) {
    console.log(fileBuffer.toString());
    res.end(fileBuffer.toString());
  });
});

console.log(dir);
const exec = require('child_process').exec;

app.get('/main.css', function(req, res) {
  const cmd = `stylus ${dir}/main.styl -p`;
  exec(cmd, function(err, stdout) {
    if(err) {
      console.log(err);
      res.status(500).send('Something broke! Cannot sent css !');
    }
    else {
      res.end(stdout);
    }
  });
});

