'use strict';
var dbConn = require('../configuracoes/db.config');
var movimentacao = function (movimentacao) {
  this.id_movimentacao = movimentacao.id_movimentacao;
  this.valor_transacao = movimentacao.valor_transacao;
  this.tipo_transacao = movimentacao.tipo_transacao;
  this.id_conta = movimentacao.id_conta;
  this.data_transacao = movimentacao.data_transacao;

};
movimentacao.create = function (newEmp, result) {
  dbConn.query("INSERT INTO movimentacao set ?", newEmp, function (err, res) {
    if (err) {
      result(err, null);
    }
    else {
      result(null, res.insertId);
    }
  });
};

movimentacao.findAll = function (result) {
  dbConn.query("Select * from movimentacao", function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
movimentacao.buscarSaldo = function (idConta, result) {
  dbConn.query("SELECT contas.nome, ((SELECT sum(movimentacao.valor_transacao) from movimentacao WHERE movimentacao.id_conta=contas.id_conta AND movimentacao.tipo_transacao=1) - (SELECT sum(movimentacao.valor_transacao) from movimentacao WHERE movimentacao.id_conta=contas.id_conta AND movimentacao.tipo_transacao=2)) as saldo FROM contas WHERE contas.id_conta=" + idConta, function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
movimentacao.extrato = function (idConta, result) {
  dbConn.query("SELECT *FROM movimentacao WHERE movimentacao.id_conta = " + idConta + " ORDER BY data_transacao asc", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      let saldoAtual = 0;
      for (let x = 0; x < res.length; x++) {
        if (res[x].tipo_transacao == 1) {
          saldoAtual += res[x].valor_transacao;
        } else {
          saldoAtual -= res[x].valor_transacao;
        }
        res[x].saldoAtual = saldoAtual;
      }
      result(null, res);
    }
  });
};

module.exports = movimentacao;