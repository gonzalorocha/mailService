angular
    .module('appInbox')
    .service('inboxService', Serviceinbox);

//funcion curring
function Serviceinbox($http) {
  this.obtenerMensajes =  function () {
    return $http.get('/api/mensaje/getRecibidos').then(function(res) {
      return res.data;
      console.log(res.data);
    }).catch(function(err){
      console.log(err);
    });
  }
}
