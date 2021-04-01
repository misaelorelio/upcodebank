const express = require('express')
const router = express.Router()
const contacontroles = require('../controles/conta.controle');

router.get('/', contacontroles.findAll);

router.post('/', contacontroles.create);

router.get('/:id', contacontroles.findById);

router.put('/:id', contacontroles.update);

router.delete('/:id', contacontroles.delete);
module.exports = router