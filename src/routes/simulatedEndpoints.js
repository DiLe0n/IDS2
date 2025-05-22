const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Simulamos una validación
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.status(200).json({ message: '✅ Login exitoso' });
  } else {
    res.status(401).json({ message: '❌ Credenciales inválidas' });
  }
});

router.post('/admin', (req, res) => {
  const { email } = req.body;
  if (email && email.endsWith('@empresa.com')) {
    res.status(200).json({ message: '✅ Acceso autorizado a /admin' });
  } else {
    res.status(403).json({ message: '❌ Acceso denegado a /admin' });
  }
});

module.exports = router;
