let socketIO = require('socket.io');
let io = socketIO();
let socketAPI = {};
//Your socket logic here
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (data) => {
        console.log('message: ' + data);
        socket.broadcast.emit('io to client', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
socketAPI.io = io;
module.exports = socketAPI;