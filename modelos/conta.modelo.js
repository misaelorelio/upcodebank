'use strict';
var dbConn = require('../configuracoes/db.config');
var contas = function (contas) {
  this.id_conta = contas.id_conta;
  this.nome = contas.nome;
  this.cpf = contas.cpf;
  this.data_nascimento = contas.data_nascimento;
  this.data_cadastro = contas.data_cadastro;

};

contas.create = function (newEmp, result) {

  dbConn.query("INSERT INTO contas set ?", newEmp, function (err, res) {
    if (err) {
      result(err, null);
    }
    else {
      result(null, res.insertId);
    }
  });
};

contas.findAll = function (result) {
  dbConn.query("Select * from contas", function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = contas;