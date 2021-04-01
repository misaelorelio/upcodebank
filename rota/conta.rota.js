const express = require('express')
const router = express.Router()
const contacontrollers =   require('../controllers/conta.controllers');
// Retrieve all employees
router.get('/', contacontrollers.findAll);
// Create a new employee
router.post('/', contacontrollers.create);
// Retrieve a single employee with id
router.get('/:id', contacontrollers.findById);
// Update a employee with id
router.put('/:id', contacontrollers.update);
// Delete a employee with id
router.delete('/:id', contacontrollers.delete);
module.exports = router