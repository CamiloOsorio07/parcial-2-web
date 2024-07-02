const express = require('express');
const router = express.Router();
const taquilleroController = require('../controllers/taquilleroController');

router.get('/', taquilleroController.getAllTaquilleros);
router.post('/', taquilleroController.createTaquillero);
router.get('/:id', taquilleroController.getTaquilleroById);
router.put('/:id', taquilleroController.updateTaquillero);
router.delete('/:id', taquilleroController.deleteTaquillero);

module.exports = router;
