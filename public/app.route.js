var app = angular.module('app.routes', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        //Configuro las rutas para los diferentes html
        .when('/index', {
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
            templateUrl: '/views/registro/registro.html',
            controller: 'registroController',
            controllerAs: 'rc'
        })
        .when('/', {
            templateUrl: '/views/login/login.html',
            controller: 'loginController',
            controllerAs: 'lc'
        })

    $locationProvider.html5Mode(true);
}]);
