var express = require('express');
var db = require('../db/db');
var queries = require('../db/crud_queries').mensaje;
var usuarioQueries = require('../db/crud_queries').usuario;


function sanitize(data){
  return JSON.stringify(data,null,4);
}

module.exports.get = (req, res) => {
  db.get().query(queries.get, (err, rows) => {
    if(err) throw err;
    res.send(sanitize(rows));
  })
};

module.exports.getById = (req, res) => {
  db.get().query(queries.getById, (err, rows) => {
    if(err) throw err;
    res.send(sanitize(rows));
  })
};

module.exports.getRecibidos = (req, res) => {
  db.get().query(queries.getRecibidos, (err, rows) => {
    if(err) throw err;
    res.send(sanitize(rows));
  })
};

module.exports.post = (req, res) => {
  db.get().query(queries.post,{asunto: req.body.asunto, mensaje: req.body.mensaje, remitente: 1, fecha: new Date()}, (err, result)=> {
    let id = result.insertId;
    console.log(id);
    console.log(req.body.remitente.originalObject);
    db.get().query(queries.postRecipiente,{destinatario_id: req.body.remitente.originalObject, mensaje_id: id, tipo_recipiente_id : 1, leido: 0})
    if (err) throw err;
      res.status(200).send(sanitize(result));
  })
};

module.exports.put = (req, res) => {
  db.get().query(queries.put,[{asunto: req.body.asunto, mensaje: req.body.mensaje, remitente: req.body.remitente,fecha: new Date()},{id : req.params.id}],(err,result) =>{
    if (err) throw err;
    res.status(200).send(sanitize(result));
  })
};

module.exports.delete = (req,res) => {
  db.get().query(queries.delete,[{id: req.params.id}],(err,result) => {
    if (err) throw err;
    res.status(200).send(sanitize(result));
  })
};
