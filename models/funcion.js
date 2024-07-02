const mongoose = require('mongoose');

const funcionSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  pelicula_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula', required: true },
  sala_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala', required: true }
});

module.exports = mongoose.model('Funcion', funcionSchema);
