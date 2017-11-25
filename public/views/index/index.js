angular
    .module('appInbox')
    .controller('inbox', inbox);
    
  function inbox($scope, inboxService){
  var vm = this;
    inboxService.obtenerMensajes().then(function(mensaje){
      vm.mensaje = mensaje;
    })
  }
