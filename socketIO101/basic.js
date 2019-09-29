// we need http because we dont have express
const http = require('http');
// We need socketio...it's 3rd party
const socketio = require('socket.io');

// We make http server with node !
const server = http.createServer((req, res) => {
    res.end("I am connected in socket101!")
});

const io = socketio(server);

io.on('connection', (socket,req)=>{
    //ws.send is same to socket.emit
    socket.emit('welcome', 'Welcome to the websocket server!!');

    //no change from ws
    socket.on('message', (msg) =>{
        console.log(msg);
    })
})

server.listen(8000);

