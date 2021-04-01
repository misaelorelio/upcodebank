'use strict';
const contas = require('../modelos/conta.modelo');
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
  
  const new_contas = new contas(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Forneça todos os campos obrigatórios' });
  } else {
    contas.create(new_contas, function (err, contas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "contas adicionadas com sucesso!", data: contas });
    });
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