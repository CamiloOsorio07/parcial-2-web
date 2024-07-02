const express = require('express');
const router = express.Router();
const puestoController = require('../controllers/puestoController');

router.get('/', puestoController.getAllPuestos);
router.post('/', puestoController.createPuesto);
router.get('/:id', puestoController.getPuestoById);
router.put('/:id', puestoController.updatePuesto);
router.delete('/:id', puestoController.deletePuesto);

module.exports = router;
