( function (g) {
  var socket = io('http://app1.vm/'),
    logger;
  socket.on("client-msg", function(msg){
    if ( logger ){
      logger.innerHTML += "\n" + msg;
    }
  });
  g.addEventListener("DOMContentLoaded", function(evt){
    logger = document.getElementById("console");
  });
} )(window);
