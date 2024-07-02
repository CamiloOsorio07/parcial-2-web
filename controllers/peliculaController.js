const Pelicula = require('../models/pelicula');

exports.getAllPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json(peliculas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPelicula = async (req, res) => {
  const pelicula = new Pelicula(req.body);
  try {
    const newPelicula = await pelicula.save();
    res.status(201).json(newPelicula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPeliculaById = async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (pelicula == null) {
      return res.status(404).json({ message: 'Pelicula not found' });
    }
    res.status(200).json(pelicula);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePelicula = async (req, res) => {
  try {
    const updatedPelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPelicula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePelicula = async (req, res) => {
  try {
    await Pelicula.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Pelicula deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
