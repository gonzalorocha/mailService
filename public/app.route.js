var app = angular.module('app.routes', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        //Configuro las rutas para los diferentes html
        .when('/', {
            templateUrl: '/views/index/index.html',
            controller: 'indexController',
            controllerAs: 'ic'
        })
        .when('/nuevo', {
            templateUrl: '/views/mensaje/nuevo.html',
            controller: 'nuevoController',
            controllerAs: 'nc'
        })
        .when('/registrar', {
            templateUrl: '/views/mensaje/registrar.html',
            controller: 'registroController',
            controllerAs: 'rc'
        })
}]);
