( function (g) {
  var socket = io(); 
  var cnt = 0;
  g.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-message").addEventListener("click", function(e){
      e.preventDefault();
      socket.emit("msg", "New Message" + cnt++);
    });
  });

} )(window);
