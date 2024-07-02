const Boleta = require('../models/boleta');

exports.comprarBoleta = async (req, res) => {
  const boleta = new Boleta(req.body);
  try {
    const newBoleta = await boleta.save();
    res.status(201).json(newBoleta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.consultarBoletas = async (req, res) => {
  try {
    const boletas = await Boleta.find();
    res.status(200).json(boletas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.consultarBoletasPorCliente = async (req, res) => {
  try {
    const boletas = await Boleta.find({ cliente_id: req.params.id });
    res.status(200).json(boletas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.consultarBoletasPorFuncion = async (req, res) => {
  try {
    const boletas = await Boleta.find({ funcion_id: req.params.id });
    res.status(200).json(boletas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.consultarBoletasPorTaquillero = async (req, res) => {
  try {
    const boletas = await Boleta.find({ taquillero_id: req.params.id });
    res.status(200).json(boletas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
