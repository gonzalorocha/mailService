angular
    .module('app')
    .service('loginService', loginService);

//funcion curring
function loginService($http, $rootScope, $location) {
    this.obtenerValidacion = function (usuario) {
        return $http.post('api/usuario/getByMail', usuario).then(function (res) {
            if (res.status == 401){
                alert('Usuario y/o contraseña incorrecta');
                return false;
            }
            else{
                localStorage.setItem('emailservice', JSON.stringify(res.data.data));
                $location.path('index')
                return res.data.data;
                }
            console.log(res.data);
        }).catch(function (err) {
            alert('Usuario y/o contraseña incorrecta');
            console.log(err);
        });
    }
    this.estaLoggeado = function () {
        var i = localStorage.getItem('emailservice');
        if (i) {
            $rootScope.user = JSON.parse(i);
            console.log($rootScope.user );
            return JSON.parse(i);
        }  else
            return null;
    }
    this.logout = function(){
        localStorage.setItem('emailservice', null);
        $location.path('/');
    }


}