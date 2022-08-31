//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const equities = express.Router();
//import db
const db = require('../db/dbConfig');
const { getEquityNames, getAllEquities } = require('../queries/charts');

//Names
equities.get('/names', async (req, res) => {
  console.log('get names /');

  const equityNames = await getEquityNames();
  console.log(equityNames);
  if (equityNames[0]) {
    res.status(200).json({
      success: true,
      payload: [equityNames],
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Index
equities.get('/', async (req, res) => {
  console.log('get all /');

  const allEquities = await getAllEquities();
  console.log(allEquities);
  if (allEquities[0]) {
    res.status(200).json({
      success: true,
      payload: allEquities,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

module.exports = equities;
