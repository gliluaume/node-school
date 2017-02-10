var fs = require('fs');

let filename = process.argv[2];
let fileBuffer = fs.readFileSync(filename);

console.log(fileBuffer.toString().split('\n').length - 1);