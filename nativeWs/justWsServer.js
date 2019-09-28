const http = require('http');

const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected!")
});

server.listen(8000);