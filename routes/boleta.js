const express = require('express');
const router = express.Router();
const boletaController = require('../controllers/boletaController');

router.get('/', boletaController.getAllBoletas);
router.post('/', boletaController.createBoleta);
router.get('/:id', boletaController.getBoletaById);
router.put('/:id', boletaController.updateBoleta);
router.delete('/:id', boletaController.deleteBoleta);

module.exports = router;
