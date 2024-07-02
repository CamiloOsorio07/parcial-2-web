const Funcion = require('../models/funcion');

exports.getAllFunciones = async (req, res) => {
  try {
    const funciones = await Funcion.find();
    res.status(200).json(funciones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFuncion = async (req, res) => {
  const funcion = new Funcion(req.body);
  try {
    const newFuncion = await funcion.save();
    res.status(201).json(newFuncion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFuncionById = async (req, res) => {
  try {
    const funcion = await Funcion.findById(req.params.id);
    if (funcion == null) {
      return res.status(404).json({ message: 'Funcion not found' });
    }
    res.status(200).json(funcion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFuncion = async (req, res) => {
  try {
    const updatedFuncion = await Funcion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFuncion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFuncion = async (req, res) => {
  try {
    await Funcion.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Funcion deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
