const express = require('express')
const router = express.Router()
const contaControles = require('../controles/conta.controle');

router.get('/listar', contaControles.findAll);

router.post('/inserir', contaControles.create);

module.exports = router