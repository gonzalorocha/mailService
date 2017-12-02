angular
.module('app')
.service('registroService', registroService);

//funcion curring
function registroService($http, $location) {
    this.crearUsuario = function (usuario) {
        var usuarioNuevo = usuario;
        $http.post('/api/usuario', usuarioNuevo).then(function(res) {
            console.log('Usuario Creado');
            alert('usuario creado correctamente');
            $location.path('/')
        }).catch(function(err){
            console.log(err);
        });
    }
    this.obtenerProvincias =  function () {
        var response = $http.get('ciudades-argentinas.json').then(function(res){
            return res.data;
        });
        return response;
    }
}