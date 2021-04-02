'use strict';
const movimentacao = require('../modelos/movimentacao.modelo');
exports.findAll = function (req, res) {
    movimentacao.findAll(function (err, movimentacao) {
        if (err)
            res.send(err);
        res.send(movimentacao);
    });
};
exports.create = function (req, res) {


    if (req.body.valor_transacao != undefined && req.body.tipo_transacao != undefined && req.body.id_conta != undefined && req.body.data_transacao != undefined && req.body.id_conta != "" && req.body.data_transacao != "") {
        if (req.body.valor_transacao != "" && req.body.valor_transacao > 0) {
            if (req.body.tipo_transacao != "" && req.body.tipo_transacao == 1 || req.body.tipo_transacao == 2) {
                const new_movimentacao = new movimentacao(req.body);
                movimentacao.create(new_movimentacao, function (err, movimentacao) {
                    if (err)
                        res.send(err);
                    res.json({ error: false, message: "movimentações adicionadas com sucesso!", data: movimentacao });

                });
            } else {
                res.status(400).send({ error: true, message: 'Insira “1” para depósito ou “2” para saque' });
            }
        } else {
            res.status(400).send({ error: true, message: 'Valor informado deve ser maior que zero!' });
        }
    } else {
        res.status(400).send({ error: true, message: 'Todos os campos são obrigatórios' });


    }
};

exports.buscarSaldo = function (req, res) {
    movimentacao.buscarSaldo(req.params.id, function (err, movimentacao) {
        if (err)
            res.send(err);
        res.json(movimentacao);
    });
};

exports.extrato = function (req, res) {
    movimentacao.extrato(req.params.id, function (err, movimentacao) {
        if (err)
            res.send(err);
        res.json(movimentacao);
    });
};
