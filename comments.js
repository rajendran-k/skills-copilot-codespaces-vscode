// Create web server
// 1. Load the http module
var http = require('http');

// 2. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

// 3. Output the server object
console.log('Server running at http://localhost:8080/');

// 4. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

// 5. Output the server object
console.log('Server running at http://localhost:8080/');

// 6. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// 7. Output the server object
console.log('Server running at http://localhost:8080/');

// 8. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// 9. Output the server object
console.log('Server running at http://localhost:8080/');

// 10. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// 11. Output the server object
console.log('Server running at http://localhost:8080/');

// 12. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// 13. Output the server object
console.log('Server running at http://localhost:8080/');

// 14. Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// 15. Output the server object
console
