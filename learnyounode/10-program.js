var net = require('net');
var port = process.argv[2];

var formatCurrentHour = function() {
	var digipadder = function(number) {
		if(number <= 9) {
			return '0' + number;
		} else {
			return number.toString();
		}
	}
	var date = new Date();
	return date.getFullYear() + '-' + digipadder(date.getMonth() + 1) + '-' + digipadder(date.getDate()) + ' ' + digipadder(date.getHours()) + ':' + digipadder(date.getMinutes());
};

var listener = function(socket) {
	socket.write(formatCurrentHour() + '\n');
	socket.end();
};

var server = net.createServer(listener);
server.listen(port);
