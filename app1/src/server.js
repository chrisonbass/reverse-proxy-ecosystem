var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'))

app.get("/", (req, res) => {
  var contents = fs.readFileSync("./public/index.html");
  res.send(contents);
} );

var serverPort = 80;
server.listen( serverPort, () => {
  var str = `Node Server started: \nlocalhost:${serverPort}`,
      ln  = `==============================================`;
  console.log("\n" + ln + "\n" + str + "\n" + ln);
} );

io.sockets.on('connection', function (socket) {
  console.log("\nSocket connection made"); 
  socket.on('msg', function (msg) {
    console.log("\nSocket message received: " + msg); 
    socket.emit("client-msg", "Thanks for nothing");
  });
});
