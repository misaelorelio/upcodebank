'use strict';
var dbConn = require('../configuracoes/db.config');
var contas = function (contas) {
  this.id_conta = contas.id_conta;
  this.nome = contas.nome;
  this.cpf = contas.cpf;
  this.data_nascimento = contas.data_nascimento;

};
contas.create = function (newEmp, result) {
  
  dbConn.query("INSERT INTO contas set ?", newEmp, function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
contas.findById = function (id, result) {
  dbConn.query("Select * from contas where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
contas.findAll = function (result) {
  dbConn.query("Select * from contas", function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    }
    else {
      console.log('contas : ', res);
      result(null, res);
    }
  });
};
contas.update = function (id, contas, result) {
  dbConn.query("UPDATE contas SET id_conta=?,nome=?,cpf=?,data_nascimento=?", [contas.id_conta, contas.nome, contas.cpf, contas.data_nascimento], function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
contas.delete = function (id, result) {
  dbConn.query("DELETE FROM contas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = contas;