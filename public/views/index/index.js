angular
    .module('appInbox')
    .controller('inbox', inbox);
//Inyecto mensaje service para enviar el mensaje. ms es un alias de mensajeService ya que lo utiliza en orden
function inbox($scope, inboxService){
  var vm = this;
  inboxService.obtenerMensajes().then(function(mensaje){
    vm.mensajes = mensaje;
  })
}
