const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

router.post('/comprar', ventasController.comprarBoleta);
router.get('/consulta', ventasController.consultarBoletas);
router.get('/consulta/cliente/:id', ventasController.consultarBoletasPorCliente);
router.get('/consulta/funcion/:id', ventasController.consultarBoletasPorFuncion);
router.get('/consulta/taquillero/:id', ventasController.consultarBoletasPorTaquillero);

module.exports = router;
