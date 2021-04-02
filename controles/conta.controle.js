'use strict';
const contas = require('../modelos/conta.modelo');
const moment = require('moment');
exports.findAll = function (req, res) {
  contas.findAll(function (err, contas) {
    console.log('controles')
    if (err)
      res.send(err);
    console.log('res', contas);
    res.send(contas);
  });
};

exports.create = function (req, res) {

  const now = moment(new Date());
  const past = moment(req.body.data_nascimento);
  const duration = moment.duration(now.diff(past));

  const days = duration.asDays();
  const ano = duration.asYears();

  if (req.body.cpf != undefined && req.body.data_nascimento != undefined && req.body.nome != undefined && req.body.data_nascimento != "" && req.body.nome != "" && req.body.cpf != "") {

    if (ano < 18) {
      res.status(400).send({ error: true, message: 'Não é possível incluir uma conta bancária para clientes de menor idade' });
    } else {
      const new_contas = new contas(req.body);
      contas.create(new_contas, function (err, contas) {
        if (err)
          res.send(err);
        res.json({ error: false, message: "Contas adicionadas com sucesso! ", data: contas });
      });

    }
  } else {
    res.status(400).send({ error: true, message: 'Todos os campos são obrigatórios' });
  }
};
exports.findById = function (req, res) {
  contas.findById(req.params.id, function (err, contas) {
    if (err)
      res.send(err);
    res.json(contas);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Forneça todos os campos obrigatórios' });
  } else {
    contas.update(req.params.id, new contas(req.body), function (err, contas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'contas adicionadas com sucesso!' });
    });
  }
};
exports.delete = function (req, res) {
  contas.delete(req.params.id, function (err, contas) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'contas excluídas com sucesso' });
  });
};