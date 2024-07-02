const mongoose = require('mongoose');

const boletaSchema = new mongoose.Schema({
  precio: { type: Number, required: true },
  funcion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcion', required: true },
  puesto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Puesto', required: true },
  cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  taquillero_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Taquillero', required: true }
});

module.exports = mongoose.model('Boleta', boletaSchema);
