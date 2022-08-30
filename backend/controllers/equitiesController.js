//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const equities = express.Router();
//import db
const db = require('../db/dbConfig');
const { getAllEquities } = require('../queries/charts');

//New
equities.get('/', async (req, res) => {
  console.log('get all /');

  const allEquities = await getAllEquities();
  console.log(allEquities);
  if (allEquities[0]) {
    res.status(200).json({
      success: true,
      payload: [allEquities],
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

module.exports = equities;
