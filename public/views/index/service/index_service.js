angular
    .module('app')
    .service('inboxService', inboxService);

//funcion curring
function inboxService($http, $rootScope) {
  this.obtenerMensajes =  function() {
    id = $rootScope.user.id;
    return $http.get('/api/mensaje/getRecibidos/' + id).then(function(res) {
      return res.data;
      console.log(res.data);
    }).catch(function(err){
      console.log(err);
    });
  }
}
