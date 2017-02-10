var http = require('http');

let url = process.argv[2];

var analyseResponse = function(response) {
	response.setEncoding('utf8');
	response.on('data', function(value) {
		console.log(value);
	});
};

http.get(url, analyseResponse);
