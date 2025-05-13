const rules = require('../config/rules');
const { createAlert } = require('../services/alertService');

module.exports = async (req, res, next) => {
  const payload = JSON.stringify(req.body) + req.originalUrl;
  let threatDetected = false;

  // 1. Detección de amenazas
  for (let rule of rules) {
    if (rule.pattern.test(payload)) {
      await createAlert({
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        method: req.method,
        url: req.originalUrl,
        rule: rule.name,
        payload,
      });
      console.warn(`🚨 Alerta: ${rule.name} detectada en ${req.ip}`);
      threatDetected = true;
      break;
    }
  }

  // 2. Registro de eventos válidos con criterio personalizado
  if (!threatDetected) {
    // Ejemplo: registrar si el usuario envía un correo con dominio "empresa.com"
    if (req.body?.email && req.body.email.endsWith('@empresa.com')) {
      await createAlert({
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        method: req.method,
        url: req.originalUrl,
        rule: 'Registro válido: email empresarial',
        payload,
      });
      console.log(`🟢 Registro especial: email empresarial desde ${req.ip}`);
    }

    // Otro ejemplo: cualquier POST al endpoint /admin
    if (req.method === 'POST' && req.originalUrl.startsWith('/admin')) {
      await createAlert({
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        method: req.method,
        url: req.originalUrl,
        rule: 'Acceso a /admin',
        payload,
      });
      console.log(`🟡 Registro especial: acceso POST a /admin`);
    }
  }

  next();
};
