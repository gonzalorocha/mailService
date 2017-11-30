var app = angular.module('app');
app.controller('nuevoController', function($scope, mensajeService){
    var nc = this;
    nc.submit = function(){
        mensajeService.crearMensaje(nc.form);
      };
    mensajeService.obtenerUsuarios().then(function(usuarios){
        nc.usuarios = usuarios;
    })
    $scope.nc = nc;
})