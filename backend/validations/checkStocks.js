//import db
const db = require('../db/dbConfig');

const checkName = (req, res, next) => {
  if (req.body.chart_name || req.body.equity_name || req.body.metrics) {
    next();
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
};

module.exports = {
  checkName,
};
