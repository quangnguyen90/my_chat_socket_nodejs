let socketIO = require('socket.io');
let io = socketIO();
let socketAPI = {};
//Your socket logic here
socketAPI.io = io;
module.exports = socketAPI;