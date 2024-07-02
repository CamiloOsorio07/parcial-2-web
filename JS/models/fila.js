const mongoose = require('mongoose');

const filaSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  sala_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala', required: true }
});

module.exports = mongoose.model('Fila', filaSchema);
