const express = require('express')
const router = express.Router()
const movimentacaoControles = require('../controles/movimentacao.controle');

router.get('/listar', movimentacaoControles.findAll);

router.post('/inserir', movimentacaoControles.create);

router.get('/saldo/:id', movimentacaoControles.buscarSaldo);

router.get('/extrato/:id', movimentacaoControles.extrato);

module.exports = router