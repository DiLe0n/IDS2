const Alert = require('../models/alert');

const getAlerts = async (req, res) => {
  const alerts = await Alert.find().sort({ timestamp: -1 }).limit(100);
  res.json(alerts);
};

module.exports = { getAlerts };
