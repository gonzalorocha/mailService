angular
.module('app')
.service('registroService', registroService);

//funcion curring
function registroService($http) {
    this.crearUsuario =  function (usuario) {
    var usuarioNuevo = usuario;
    $http.post('/api/usuario', usuarioNuevo).then(function(res) {
        console.log('Usuario Creado');
    }).catch(function(err){
        console.log(err);
    });
    }
    this.obtenerLocalidad =  function () {
        return $http.get('/api/localidad').then(function(res) {
          return res.data;
        }).catch(function(err){
          console.log(err);
        });
      }
}