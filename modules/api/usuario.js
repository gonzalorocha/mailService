var express = require('express');
var db      = require('../db/db');
var queries = require('../db/crud_queries').usuario;


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

module.exports.getByUser = (req, res) => {
  db.get().query(queries.getByUser, (err, rows) => {
    if(err) throw err;
    res.send(sanitize(rows));
  })
};

module.exports.post = (req, res) => {
  db.get().query(queries.post, {nombre: req.body.nombre, usuario: req.body.usuario, direccion: req.body.direccion,apellido: req.body.apellido,mail:req.body.mail,telefono:req.body.telefono,cuidad_id:req.body.cuidadId,password:req.body.password}, (err, result)=> {
      if (err) throw err;
      res.status(200).send(sanitize(result));
  })
};

module.exports.put = (req, res) => {
  db.get().query(queries.put,[{nombre: req.body.nombre, usuario: req.body.usuario, direccion: req.body.direccion,apellido: req.body.apellido,mail:req.body.mail,telefono:req.body.telefono,cuidad_id:req.body.cuidadId,password:req.body.password},{id : req.params.id}],(err,result) =>{
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
