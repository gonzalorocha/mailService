var express = require('express');
var md5     = require('md5');
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
  db.get().query(queries.getById,[req.params.id], (err, rows) => {
    if(err) throw err;
    res.send(sanitize(rows));
  })
};

module.exports.getByMail = (req, res) => {
  db.get().query(queries.getByMail, [req.body.email], (err, rows) => {
    console.log(err);
    if(err) throw err;
    if (rows.length == 0)
      res.status(401).send('Unauthorized');
    else
      if (rows[0].password == md5(req.body.password))
        res.send({ message: 'OK', data: rows[0] });
      else
        res.status(401).send('Unauthorized');
  })
};

module.exports.post = (req, res) => {
  db.get().query(queries.post, {nombre: req.body.nombre, usuario: req.body.usuario, direccion: req.body.direccion,apellido: req.body.apellido,mail:req.body.mail,telefono:req.body.telefono,cuidad:req.body.cuidad,provincia: req.body.provincia,password: md5(req.body.password)}, (err, result)=> {
      if (err) throw errcuidad
      res.status(200).send(sanitize(result));
  })
};

module.exports.put = (req, res) => {
  db.get().query(queries.put,[{nombre: req.body.nombre, usuario: req.body.usuario, direccion: req.body.direccion,apellido: req.body.apellido,mail:req.body.mail,telefono:req.body.telefono,cuidad:req.body.cuidad,provincia: req.body.provincia,password: md5(req.body.password)},{id : req.params.id}],(err,result) =>{
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
