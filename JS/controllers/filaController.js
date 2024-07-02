const Fila = require('../models/fila');

exports.getAllFilas = async (req, res) => {
  try {
    const filas = await Fila.find();
    res.status(200).json(filas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFila = async (req, res) => {
  const fila = new Fila(req.body);
  try {
    const newFila = await fila.save();
    res.status(201).json(newFila);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFilaById = async (req, res) => {
  try {
    const fila = await Fila.findById(req.params.id);
    if (fila == null) {
      return res.status(404).json({ message: 'Fila not found' });
    }
    res.status(200).json(fila);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFila = async (req, res) => {
  try {
    const updatedFila = await Fila.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFila);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFila = async (req, res) => {
  try {
    await Fila.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Fila deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
