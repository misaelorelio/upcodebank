'use strict';
const movimentacao = require('../modelos/movimentacao.modelo');
exports.findAll = function (req, res) {
    movimentacao.findAll(function (err, movimentacao) {
        console.log('controle')
        if (err)
            res.send(err);
        console.log('res', movimentacao);
        res.send(movimentacao);
    });
};
exports.create = function (req, res) {


    if (req.body.valor_transacao != undefined && req.body.tipo_transacao != undefined && req.body.id_conta != undefined && req.body.tipo_transacao != "" && req.body.id_conta != "") {
       ///// if()
        if (req.body.valor_transacao != "" && req.body.valor_transacao > 0) {
            const new_movimentacao = new movimentacao(req.body);
            movimentacao.create(new_movimentacao, function (err, movimentacao) {
                if (err)
                    res.send(err);
                res.json({ error: false, message: "movimentações adicionadas com sucesso!", data: movimentacao });

            });
        } else {
            res.status(400).send({ error: true, message: 'Valor informado deve ser maior que zero!' });
        }
    } else {
        res.status(400).send({ error: true, message: 'Todos os campos são obrigatórios' });
    }
};
exports.findById = function (req, res) {
    movimentacao.findById(req.params.id, function (err, movimentacao) {
        if (err)
            res.send(err);
        res.json(movimentacao);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Forneça todos os campos obrigatórios' });
    } else {
        movimentacao.update(req.params.id, new movimentacao(req.body), function (err, movimentacao) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'movimentacões adicionadas com sucesso!' });
        });
    }
};
exports.delete = function (req, res) {
    movimentacao.delete(req.params.id, function (err, movimentacao) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'movimentacões excluídas com sucesso' });
    });
};