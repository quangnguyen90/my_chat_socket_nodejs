let socketIO = require('socket.io');
let io = socketIO();
let socketAPI = {};
//var listMembers = [];
//Your socket logic here
io.on('connection', (socket) => {
    console.log('a user connected');

    // socket is socketID
    // save socket {
    //     nickname: Quang,
    //     socket: socket
    // }

    // listMembers.push({
    //     nickname: Quang,
    //     socket: socket
    // })

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