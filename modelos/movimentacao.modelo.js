'use strict';
var dbConn = require('../configuracoes/db.config');
var movimentacao = function (movimentacao) {
  this.id_movimentacao = movimentacao.id_movimentacao;
  this.valor_transacao = movimentacao.valor_transacao;
  this.tipo_transacao = movimentacao.tipo_transacao;
  this.id_conta = movimentacao.id_conta;

};
movimentacao.create = function (newEmp, result) {
  dbConn.query("INSERT INTO movimentacao set ?", newEmp, function (err, res) {
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
movimentacao.findById = function (id, result) {
  dbConn.query("Select * from movimentacao where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
movimentacao.findAll = function (result) {
  dbConn.query("Select * from movimentacao", function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    }
    else {
      console.log('movimentacao : ', res);
      result(null, res);
    }
  });
};
movimentacao.update = function (id, movimentacao, result) {
  dbConn.query("UPDATE movimentacao SET id_movimentacao=?,valor_transacao=?,tipo_transacao=?,id_conta=?", [movimentacao.id_movimentacao, movimentacao.valor_transacao, movimentacao.tipo_transacao, movimentacao.id_conta], function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
movimentacao.delete = function (id, result) {
  dbConn.query("DELETE FROM movimentacao WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = movimentacao;