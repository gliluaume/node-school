var fs = require('fs'),
	path = require('path');

var fileFilter = function (dirname, extension, callback) {
	let dotExtension = '.' + extension;

	fs.readdir(dirname, function(error, files) {
		if(error) {
			return callback(error);
		}

		let filtered = files.filter(function(file) {
			return path.extname(file) === dotExtension;
		});

		return callback(error, filtered);
	});
};

module.exports = fileFilter;
