var http = require('http');

var DEBUG = false;

var trace = function(message) {
	if(DEBUG) {
		console.log(message);
	}
};

var result = {
	contents: [],
	error: undefined,
	completed: 0
};


var treatUrl = function(url, analyser) {
	
	result.contents[url] = '';

	http.get(url, function(response) {

		response.setEncoding('utf8');
		
		response.on('data', function(value) {
			trace('data : ' + value);
			result.contents[url] += value;
		});

		response.on('error', function(error) {
			trace('error : ' + error);
			result.error = error;
		});

		response.on('end', function(value) {
			trace('end : ' + value);
			result.completed += 1;

			trace('transfer : ' + result.completed + '/ 3');
			if(result.completed === 3) {
				trace('transfer completed');
				trace(result.contents);
				for (var text in result.contents) {
					console.log(result.contents[text]);
				}
			}
		});
	});
};

treatUrl(process.argv[2]);
treatUrl(process.argv[3]);
treatUrl(process.argv[4]);
