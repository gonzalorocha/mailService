var express                   = require('express');
var router                    = module.exports = express.Router();

var jwt                       = require('express-jwt');
var config                    = require('../config/config');
var db                        = require('../modules/db/db');
var usuario                   = require('../modules/api/usuario');
var mensaje                   = require('../modules/api/mensaje');
var localidad                   = require('../modules/api/localidad');


var jwtCheck = jwt({
  secret: config.secret
});

function sanitize(data){
  return JSON.stringify(data, null, 4);
}

//Usuario
// router.get('usuario', jwtCheck, usuario.get);
router.get('/usuario',usuario.get);
router.get('/usuario/:id',usuario.getById);
router.post('/usuario',usuario.post);
router.put('/usuario/:id',usuario.put);
router.delete('/usuario/:id',usuario.delete);

//Mensajes
// router.get('/mensaje', jwtCheck, mensaje.get);
router.get('/mensaje',mensaje.get);
router.get('/mensaje/:id',mensaje.getById);
router.post('/mensaje',mensaje.post);
router.put('/mensaje/:id',mensaje.put);
router.delete('/mensaje/:id',mensaje.delete);

// router.get('/mensaje', jwtCheck, mensaje.get);
router.get('/localidad',localidad.get);
