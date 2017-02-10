'use strict';

const port = parseInt(process.argv[2], 10);
const express = require('express');
const pug = require('pug');


var app = express();
app.listen(port);

const compiledFunction = pug.compileFile('template/index.pug');

app.get('/home', function(req, res) {
  res.end(compiledFunction({date: (new Date()).toDateString()}));
})

