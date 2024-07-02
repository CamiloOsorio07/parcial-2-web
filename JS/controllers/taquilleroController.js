const Taquillero = require('../models/taquillero');

exports.getAllTaquilleros = async (req, res) => {
  try {
    const taquilleros = await Taquillero.find();
    res.status(200).json(taquilleros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTaquillero = async (req, res) => {
  const taquillero = new Taquillero(req.body);
  try {
    const newTaquillero = await taquillero.save();
    res.status(201).json(newTaquillero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTaquilleroById = async (req, res) => {
  try {
    const taquillero = await Taquillero.findById(req.params.id);
    if (taquillero == null) {
      return res.status(404).json({ message: 'Taquillero not found' });
    }
    res.status(200).json(taquillero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTaquillero = async (req, res) => {
  try {
    const updatedTaquillero = await Taquillero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTaquillero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTaquillero = async (req, res) => {
  try {
    await Taquillero.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Taquillero deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
