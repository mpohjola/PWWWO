const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Terve Tahmea Pallonpinta');
}).listen(8124, '127.0.0.1');

console.log('Web-palvelin kuuntelee porttia 8124');