require('dotenv').config(); 

const express = require('express');
const app = require('./src/app');
const connectDB = require('./database/db');

const helmet = require('helmet');

app.use(helmet()); // Seguridad HTTP headers

const PORT = process.env.PORT || 3000;

connectDB(); // Conexión a MongoDB

app.listen(PORT, () => {
  console.log(`IDS escuchando en puerto ${PORT}`);
});
