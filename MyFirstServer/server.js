var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('It works!\n');
}).listen(30025);

console.log('Server running at http://127.0.0.1:30025/');