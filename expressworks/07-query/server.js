'use strict';

const port = process.argv[2];
const express = require('express');
const app = express();

app.listen(port);

app.get('/search', function(req, res) {
  res.send(req.query);
});
