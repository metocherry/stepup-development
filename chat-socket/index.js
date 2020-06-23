const app = require('express')();

// Express initializes app to be a function handler that you can supply to an HTTP server 
const http = require('http').createServer(app);

const io = require('socket.io')(http);

let roomName;

io.on('connection', (socket) => {
  console.log('a user connected');

  const id = socket.id;

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('joinRoom', (data) => {
    console.log(data);
    socket.join(data.roomName);
    roomName = data.roomName;
  })

  socket.on('chat message', (msg) => {
    io.sockets
      .in(roomName)
      .emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
