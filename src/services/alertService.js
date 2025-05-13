const Alert = require('../models/alert');

const createAlert = async (data) => {
  const alert = new Alert(data);
  await alert.save();
};

module.exports = { createAlert };
