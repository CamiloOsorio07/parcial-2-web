const Boleta = require('../models/boleta');

exports.getAllBoletas = async (req, res) => {
  try {
    const boletas = await Boleta.find();
    res.status(200).json(boletas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBoleta = async (req, res) => {
  const boleta = new Boleta(req.body);
  try {
    const newBoleta = await boleta.save();
    res.status(201).json(newBoleta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getBoletaById = async (req, res) => {
  try {
    const boleta = await Boleta.findById(req.params.id);
    if (boleta == null) {
      return res.status(404).json({ message: 'Boleta not found' });
    }
    res.status(200).json(boleta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBoleta = async (req, res) => {
  try {
    const updatedBoleta = await Boleta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBoleta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBoleta = async (req, res) => {
  try {
    await Boleta.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Boleta deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
