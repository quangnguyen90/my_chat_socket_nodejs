let socketIO = require('socket.io');
let io = socketIO();
let socketAPI = {};
//Your socket logic here
io.on('connection', (socket) => {
    console.log('a user connected');
});


socketAPI.io = io;
module.exports = socketAPI;