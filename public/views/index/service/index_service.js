angular
    .module('appInbox')
    .service('inboxService', inboxService);

//funcion curring
function inboxService($http) {
  this.obtenerMensajes =  function() {
    return $http.get('/api/mensaje/getRecibidos').then(function(res) {
      return res.data;
      console.log(res.data);
    }).catch(function(err){
      console.log(err);
    });
  }
}
