var server = require('http').createServer();
var io = require('socket.io')(server);

var serverPort = 80;
server.listen( serverPort, () => {
  var str = `Node Server started: \nlocalhost:${serverPort}`,
      ln  = `==============================================`;
  console.log("\n" + ln + "\n" + str + "\n" + ln);
} );

io.sockets.on('connection', function (socket) {
  console.log("\nSocket connection made"); 
  socket.on('msg', function (msg) {
    io.sockets.emit("client-msg",msg);
  });
});
