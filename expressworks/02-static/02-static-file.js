'use strict';
var port = parseInt(process.argv[2], 10);
var resource = process.argv[3] || path.join(__dirname, 'public');

var express = require('express');
var app = express();

app.listen(port);
app.use('/', express.static(resource));
