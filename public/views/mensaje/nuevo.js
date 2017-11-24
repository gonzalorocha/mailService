angular
    .module('appMensajeNuevo')
    .controller('mensajeNuevo', mensajeNuevo);
//Inyecto mensaje service para enviar el mensaje. ms es un alias de mensajeService ya que lo utiliza en orden
function mensajeNuevo($scope, mensajeService){
  var vm = this;
  vm.submit = function(){
    mensajeService.crearMensaje(vm.form);
  };
  mensajeService.obtenerUsuarios().then(function(usuarios){
    vm.usuarios = usuarios;
  })


}
