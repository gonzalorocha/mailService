angular
    .module('appListarMail',[])
    .controller('listarMail', listarMail);


function($scope, $http){
  var vm = this;
  vm.success = false;
  vm.error   = false;
  vm.submit = function(){
    console.log("algo de esto anda")
    $http.post('/api/mensaje', vm.form).then(function(res){
      console.log('Todo ok el envio de mail');
      vm.success = true;
      vm.error   = false;
    }).catch(function(err){
      console.log(err);
      vm.success = false;
      vm.error   = true;
    });
  }

}
