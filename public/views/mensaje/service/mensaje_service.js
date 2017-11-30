angular
    .module('app')
    .service('mensajeService', mensajeService);

    //funcion curring
    function mensajeService($http) {

      this.crearMensaje =  function (mensaje) {
        var mensajeNuevo = mensaje;
        mensajeNuevo.remitente.originalObject = mensaje.remitente.originalObject.id;
        $http.post('/api/mensaje', mensajeNuevo).then(function(res) {
          console.log('Envio Email');
        }).catch(function(err){
          console.log(err);
        });
      }
      
      this.obtenerUsuarios =  function () {
        return $http.get('/api/usuario').then(function(res) {
          return res.data;
        }).catch(function(err){
          console.log(err);
        });
      }
    }
