const express = require('express');
const router = express.Router();
const filaController = require('../controllers/filaController');

router.get('/', filaController.getAllFilas);
router.post('/', filaController.createFila);
router.get('/:id', filaController.getFilaById);
router.put('/:id', filaController.updateFila);
router.delete('/:id', filaController.deleteFila);

module.exports = router;
