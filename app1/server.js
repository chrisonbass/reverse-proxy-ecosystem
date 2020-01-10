var express = require('express');
var app = express();

app.use(express.static('public'))

var serverPort = 80;
app.listen( serverPort, () => {
  var str = `Node Server started: \nlocalhost:${serverPort}`,
      ln  = `==============================================`;
  console.log("\n" + ln + "\n" + str + "\n" + ln);
} );
