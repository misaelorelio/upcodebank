const express = require('express')
const router = express.Router()
const contacontroles = require('../controles/conta.controle');

router.get('/listar', contacontroles.findAll);

router.post('/inserir', contacontroles.create);

module.exports = router