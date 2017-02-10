'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const pug = require('pug');
var app = express();

const compiledIndex = pug.compileFile('template/index.pug');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  // console.log('in get');
  res.end(compiledIndex());
});


app.post('/form', function(req, res){
  // console.log(rletbody);
  let reversed = '';
  for (let i = req.body.str.length - 1; i >= 0; i--) {
    reversed += req.body.str[i];
  }

  res.end(reversed);
});

app.listen(parseInt(process.argv[2]));
