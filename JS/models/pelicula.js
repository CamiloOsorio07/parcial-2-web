const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  duracion: { type: Number, required: true },
  genero: { type: String, required: true }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
