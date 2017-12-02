var app = angular.module('app');
app.controller('registroController', function ($scope, registroService, loginService, $location){
    var rc = this;

    rc.form = {
        usuario: '',
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        telefono: '',
        password: ''
    }
    
    rc.provinciaSelected = null;

    if (loginService.estaLoggeado())
        $location.path('index');

    rc.submit = function(){
        console.log(rc.form);
        registroService.crearUsuario(rc.form);
    };

    registroService.obtenerProvincias().then(function(provincias){
        console.log(provincias);
        rc.provincias = provincias;
    })

    rc.changeProvincia = function(){
        rc.form.provincia = rc.provinciaSelected.nombre;
        rc.cities = rc.provinciaSelected.ciudades;
    }

    rc.changeCiudad = function(){
        rc.form.ciudad = rc.ciudadSelected.nombre;
    }


    $scope.rc = rc;
})