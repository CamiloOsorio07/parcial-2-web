const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    genero: req.body.genero
  });

  try {
    const nuevaPelicula = await pelicula.save();
    res.status(201).json(nuevaPelicula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
