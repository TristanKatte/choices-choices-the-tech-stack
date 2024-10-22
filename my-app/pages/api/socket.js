// pages/api/socket.js
import { Server } from 'socket.io';

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    const io = new Server(res.socket.server);
    io.on('connection', (socket) => {
      console.log('New socket connected');

      socket.on('message', (msg) => {
        io.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('Socket disconnected');
      });
    });
    res.socket.server.io = io;
    console.log('Socket initialized');
  }
  res.end();
};

export default ioHandler;
