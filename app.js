var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end("hellodkkddd world!\n");
    });
server.listen(3000);
