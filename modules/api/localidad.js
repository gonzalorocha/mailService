var express = require('express');
var db = require('../db/db');
var queries = require('../db/crud_queries').localidad;



function sanitize(data){
  return JSON.stringify(data,null,4);
}

module.exports.get = (req, res) => {
  db.get().query(queries.get, (err, rows) => {
    if(err) throw err;
      console.log(err);
    res.send(sanitize(rows));
  })
};

module.exports.get = (req, res) => {
    db.getPais().query(queries.getPais,(err, rows) => {
      if(err) throw err;
        console.log(err);
      res.send(sanitize(rows));
    })
  };

module.exports.get = (req, res) => {
    db.getProvincia().query(queries.getProvincia, (err, rows) => {
        if(err) throw err;
        console.log(err);
        res.send(sanitize(rows));
    })
};
