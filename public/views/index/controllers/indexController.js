var app = angular.module('app');
app.controller('indexController', function ($scope, $location ,inboxService,loginService){
    var ic = this;
    if (loginService.estaLoggeado()) { 
        inboxService.obtenerMensajes().then(function(mensaje){
            ic.mensaje = mensaje;
        })
        ic.logout = function(){
            loginService.logout();
        }
        $scope.ic = ic;
    }else{
        $location.path('/')
    }

})