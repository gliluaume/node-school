// Serveur de texte en lettre majuscules avec un toUpper personnalisé
var http = require('http'),
	fs = require('fs'),
	port = process.argv[2];


var DEBUG = false;

var trace = function(message) {
	if(DEBUG) {
		console.log(message);
	}
};

var toUpper = function(text) {
	var aCode = 'a'.charCodeAt(0);
	var ACode = 'A'.charCodeAt(0);
	var outString = '';

	for(var i = 0; i < text.length; i++) {
		var charCode = text[i].charCodeAt(0); 
		if( (charCode >= aCode) && (charCode < aCode + 26)) {
			outString += String.fromCharCode(charCode + (ACode - aCode));
		} else {
			outString += text[i];
		}
	}

	return outString;
};

var server = http.createServer(function (request, response) {  
	// console.log(request);
	var outText = '';
	request.on('data', function(value) {
		trace('data : ' + value);
		outText += toUpper(value.toString());
	});

	request.on('error', function(error) {
		trace('error : ' + error);
	});

	request.on('end', function(value) {
		trace('end : ' + value);
		response.write(outText);
		response.end();
	});
});  

server.listen(port);
