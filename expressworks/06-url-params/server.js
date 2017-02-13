'use strict';

const port = parseInt(process.argv[2], 10);
const express = require('express');
const app = express();

app.listen(port);

app.put('/message/:id', function(req, res) {
  var shaOneIsed = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');
  res.end(shaOneIsed);
});
