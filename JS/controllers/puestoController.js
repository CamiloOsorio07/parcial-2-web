const Puesto = require('../models/puesto');

exports.getAllPuestos = async (req, res) => {
  try {
    const puestos = await Puesto.find();
    res.status(200).json(puestos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPuesto = async (req, res) => {
  const puesto = new Puesto(req.body);
  try {
    const newPuesto = await puesto.save();
    res.status(201).json(newPuesto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPuestoById = async (req, res) => {
  try {
    const puesto = await Puesto.findById(req.params.id);
    if (puesto == null) {
      return res.status(404).json({ message: 'Puesto not found' });
    }
    res.status(200).json(puesto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePuesto = async (req, res) => {
  try {
    const updatedPuesto = await Puesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPuesto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePuesto = async (req, res) => {
  try {
    await Puesto.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Puesto deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
