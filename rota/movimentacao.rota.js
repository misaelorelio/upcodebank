const express = require('express')
const router = express.Router()
const movimentacaocontroles = require('../controles/movimentacao.controle');

router.get('/', movimentacaocontroles.findAll);

router.post('/', movimentacaocontroles.create);

router.get('/:id', movimentacaocontroles.findById);

router.get('/buscarSaldo/:id', movimentacaocontroles.buscarSaldo);

router.put('/:id', movimentacaocontroles.update);

router.delete('/:id', movimentacaocontroles.delete);
module.exports = router