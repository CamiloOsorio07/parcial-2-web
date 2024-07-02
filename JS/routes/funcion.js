const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');

router.get('/', funcionController.getAllFunciones);
router.post('/', funcionController.createFuncion);
router.get('/:id', funcionController.getFuncionById);
router.put('/:id', funcionController.updateFuncion);
router.delete('/:id', funcionController.deleteFuncion);

module.exports = router;
