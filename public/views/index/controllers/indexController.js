var app = angular.module('app');
app.controller('indexController', function($scope, inboxService){
    var ic = this;
    inboxService.obtenerMensajes().then(function(mensaje){
        ic.mensaje = mensaje;
    })
    $scope.ic = ic;
})