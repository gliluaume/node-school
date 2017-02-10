var fs = require('fs');

let filename = process.argv[2];

fs.readFile(filename, function(error, fileBuffer) {
	console.log(fileBuffer.toString().split('\n').length - 1);
});
