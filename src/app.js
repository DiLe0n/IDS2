const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const idsMiddleware = require('./middlewares/idsMiddleware');
const alertRoutes = require('./routes/alerts');
const simulatedRoutes = require('./routes/simulatedEndpoints'); // 👈 nuevo

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(idsMiddleware);

app.use('/api/alerts', alertRoutes);
app.use('/', simulatedRoutes); // 👈 registra rutas simuladas

module.exports = app;
