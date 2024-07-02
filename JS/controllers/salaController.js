const Sala = require('../models/sala');

exports.getAllSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.status(200).json(salas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSala = async (req, res) => {
  const sala = new Sala(req.body);
  try {
    const newSala = await sala.save();
    res.status(201).json(newSala);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSalaById = async (req, res) => {
  try {
    const sala = await Sala.findById(req.params.id);
    if (sala == null) {
      return res.status(404).json({ message: 'Sala not found' });
    }
    res.status(200).json(sala);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSala = async (req, res) => {
  try {
    const updatedSala = await Sala.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedSala);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSala = async (req, res) => {
  try {
    await Sala.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Sala deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
