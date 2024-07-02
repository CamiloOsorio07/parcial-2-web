const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  distribucion_de_sillas: { type: String, required: true }
});

module.exports = mongoose.model('Sala', salaSchema);
