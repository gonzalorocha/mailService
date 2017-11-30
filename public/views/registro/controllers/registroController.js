var app = angular.module('app');
app.controller('registroController', function($scope, registroService){
    var rc = this;
    rc.submit = function(){
        registroService.crearUsuario(rc.form);
      };
    registroService.obtenerLocalidad().then(function(localdad){
        rc.localdad = localdad;
    })
    $scope.rc = rc;
})