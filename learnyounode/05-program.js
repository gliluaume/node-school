var fs = require('fs'),
	path = require('path');

let dirname = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(dirname, function(error, files) {
	files.filter(function(file) {
		return path.extname(file) === extension;
	}).forEach(function(str) {
		console.log(str);
	});
});
