'use strict';

const port = parseInt(process.argv[2], 10);
const dir = process.argv[3];

const express = require('express');

const app = express();

app.use(require('stylus').middleware(dir));
app.use(express.static(dir));

app.listen(port);
