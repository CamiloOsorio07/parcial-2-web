const mongoose = require('mongoose');

const puestoSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  fila_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fila', required: true }
});

module.exports = mongoose.model('Puesto', puestoSchema);
