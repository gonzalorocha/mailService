var app = angular.module('app');
app.controller('loginController', function ($scope, loginService, $location) {
    var lc = this;
    lc.submit = function () {
        loginService.obtenerValidacion(lc.form);
    };
    if(loginService.estaLoggeado())
        $location.path('index');
    $scope.lc = lc;
})