const express = require('express')
const router = express.Router()
const movimentacaocontroles = require('../controles/movimentacao.controle');

router.get('/listar', movimentacaocontroles.findAll);

router.post('/inserir', movimentacaocontroles.create);

router.get('/saldo/:id', movimentacaocontroles.buscarSaldo);

router.get('/extrato/:id', movimentacaocontroles.extrato);

module.exports = router