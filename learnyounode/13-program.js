var http = require('http'),
	port = process.argv[2];

var DEBUG = true;

var trace = function(message) {
	if(DEBUG) {
		console.log(message);
	}
};

var parseTime = function(date) {
	return {
		hour: date.getHours(),  
		minute: date.getMinutes(),  
		second: date.getSeconds() 
	};
}

var unixedTime = function(date) {
	return { unixtime : Math.floor(date) };
}


var server = http.createServer(function (request, response) {  
	// console.log(request);
	var parsedTime;
	trace(request.url);
	trace(request.url.indexOf('iso'));
	var dateIndex = request.url.indexOf('iso') + 4;
	var date = new Date(request.url.substring(dateIndex));

	if(request.url.indexOf('parsetime') > -1) {
		parsedTime = parseTime(date);
	} else {
		parsedTime = unixedTime(date);
	}

	trace(parsedTime);

	trace(date);

	request.on('data', function(value) {
		trace('data : ' + value);
	});

	request.on('error', function(error) {
		trace('error : ' + error);
	});

	request.on('end', function(value) {
		trace('end : ' + value);
		response.write(JSON.stringify(parsedTime));
		response.end();
	});
});  

server.listen(port);
