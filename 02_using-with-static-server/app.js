const static = require('node-static');
const http = require('http');

var server = new static.Server('./public');

http.createServer((req, res) => {
    req.addListener('end', () => {
        server.serve(req, res);
    }).resume();
}).listen(8080);
