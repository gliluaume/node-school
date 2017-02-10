'use strict';
var port = parseInt(process.argv[2], 10);
var express = require('express');
var app = express();

app.listen(port);

function def(req, res) {
  res.end('Hello World!');
};

app.get('/home', function(req, res) { 
  def(req, res);
});

app.get('/', function(req, res) { 
  def(req, res);
});
