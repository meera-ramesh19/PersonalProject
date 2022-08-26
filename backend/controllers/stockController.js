//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const stocks = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
  getAllStocks,
  getAStock,
  createStock,
  updateStock,
  deleteStock,
} = require('../queries/stocks');

const { checkName } = require('../validations/checkStocks');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//*******************CHECK FOR THE VALUE  */
// insert into items_ver (item_id, name, item_group)
// select item_id, name, item_group from items where item_id=2;

//Index
stocks.get('/', async (req, res) => {
  console.log('get all /');

  const allStocks = await getAllStocks();
  console.log(allStocks);
  if (allStocks[0]) {
    res.status(200).json({
      success: true,
      payload: allStocks,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
stocks.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const stock = await getAStock(id);
  if (stock.id) {
    res.status(200).json({
      success: true,
      payload: stock,
    });
  } else {
    res.status(404).json({
      success: false,
      id: id,
      payload: 'not found',
    });
  }
});

//CREATE
stocks.post('/new', checkName, async (req, res) => {
  try {
    const addStock = await createStock(req.body);
    res.status(200).json({
      success: true,
      payload: addStock,
    });
  } catch (error) {
    // console.log('Caught in error');
    console.log(error.message);
    res.status(404).json({ success: false });
  }
});

//DELETE
stocks.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedStock = await deleteStock(id);
  if (deletedStock) {
    if (deletedStock.id) {
      res.status(200).json({
        success: true,
        payload: deletedStock,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'not found',
      });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: deletedStock,
    });
  }
});

//update
stocks.put('/:id',checkName, async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    console.log(id, req.body)
    const updatedStock = await updateStock(id, req.body);
    console.log(updatedStock.id);
    if (updatedStock.id) {
      res.status(200).json({
        success: true,
        payload: updatedStock,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = stocks;
