const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const idsMiddleware = require('./middlewares/idsMiddleware');
const alertRoutes = require('./routes/alerts');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(idsMiddleware); // Middleware IDS

app.use('/api/alerts', alertRoutes);

module.exports = app;
