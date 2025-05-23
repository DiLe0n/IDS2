const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Endpoint protegido contra XSS
router.post(
  '/api/comentarios',
  body('comentario').trim().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }

    const comentario = req.body.comentario;
    console.log('🟢 Comentario recibido:', comentario);
    res.json({ mensaje: 'Comentario seguro recibido', comentario });
  }
);

// Login simulado
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.status(200).json({ message: '✅ Login exitoso' });
  } else {
    res.status(401).json({ message: '❌ Credenciales inválidas' });
  }
});

// Control de acceso a /admin
router.post('/admin', (req, res) => {
  const { email } = req.body;
  if (email && email.endsWith('@empresa.com')) {
    res.status(200).json({ message: '✅ Acceso autorizado a /admin' });
  } else {
    res.status(403).json({ message: '❌ Acceso denegado a /admin' });
  }
});

module.exports = router;
