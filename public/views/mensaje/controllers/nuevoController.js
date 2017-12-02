var app = angular.module('app');
app.controller('nuevoController', function ($scope, $rootScope, $location, mensajeService,loginService){
    var nc = this;
    if (loginService.estaLoggeado()) { 
    nc.submit = function(){
        nc.form.remitente_id = $rootScope.user.id;
        mensajeService.crearMensaje(nc.form);
      };
    mensajeService.obtenerUsuarios().then(function(usuarios){
        nc.usuarios = usuarios;
    })
    $scope.nc = nc;
    }else{
        $location.path('/')
    }  
})