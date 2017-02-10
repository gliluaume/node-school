var fileFilter = require('./06-module.js');

let dirname = process.argv[2];
let extension = process.argv[3];

var cb = function(error, data) {
	if (error) {
		console.log(error);
	} else {
		data.forEach(function(str) {
			console.log(str);
		});
	}
};

fileFilter(dirname, extension, cb);