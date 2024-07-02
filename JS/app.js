const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/cine-app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const peliculaRoutes = require('./routes/pelicula');
const salaRoutes = require('./routes/sala');
const filaRoutes = require('./routes/fila');
const puestoRoutes = require('./routes/puesto');
const boletaRoutes = require('./routes/boleta');
const funcionRoutes = require('./routes/funcion');
const taquilleroRoutes = require('./routes/taquillero');
const clienteRoutes = require('./routes/cliente');

app.use('/peliculas', peliculaRoutes);
app.use('/salas', salaRoutes);
app.use('/filas', filaRoutes);
app.use('/puestos', puestoRoutes);
app.use('/boletas', boletaRoutes);
app.use('/funciones', funcionRoutes);
app.use('/taquilleros', taquilleroRoutes);
app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
