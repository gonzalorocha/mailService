var express                   = require('express');
var router                    = module.exports = express.Router();

var db                        = require('../modules/db/db');
var usuario                   = require('../modules/api/usuario');
var mensaje                   = require('../modules/api/mensaje');

function sanitize(data){
  return JSON.stringify(data, null, 4);
}

//Usuario

router.get('/usuario',usuario.get);
router.get('/usuario/:id',usuario.getById);
router.post('/usuario/getByMail',usuario.getByMail);
router.post('/usuario',usuario.post);
router.put('/usuario/:id',usuario.put);
router.delete('/usuario/:id',usuario.delete);


router.get('/mensaje',mensaje.get);
router.get('/mensaje/getRecibidos/:id',mensaje.getRecibidos)
router.get('/mensaje/:id',mensaje.getById);
router.post('/mensaje',mensaje.post);
router.put('/mensaje/:id',mensaje.put);
router.delete('/mensaje/:id',mensaje.delete);

