// Sans utiliser de module externe
var http = require('http');

var DEBUG = false;

var trace = function(message) {
	if(DEBUG) {
		console.log(message);
	}
};


var url = process.argv[2];

var analyseResponse = function(response) {

	var result = {
		count : function() {
			return this.content.length;
		},
		content: '',
		error: undefined,
		isComplete: false
	};

	response.setEncoding('utf8');
	
	response.on('data', function(value) {
		trace('data : ' + value);
		result.content += value;
	});

	response.on('error', function(error) {
		trace('error : ' + error);
		result.error = error;
	});

	response.on('end', function(value) {
		trace('end : ' + value);
		result.isComplete = true;
		console.log(result.count());
		console.log(result.content);
	});
};


http.get(url, analyseResponse);
