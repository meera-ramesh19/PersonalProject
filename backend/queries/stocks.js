const db = require('../db/dbConfig.js');
// const confirmHealth = require('../confirmHealth');

const getAllStocks = async () => {
  try {
    const allStocks = await db.any('SELECT * FROM stocks');
    return allStocks;
  } catch (error) {
    return error;
  }
};

const getAStock = async (id) => {
  try {
    const stock = await db.one('SELECT * FROM stocks  WHERE id=$1', id);
    return stock;
  } catch (error) {
    return error;
  }
};

const createStock = async (stock) => {
  // let { name, fiber, protein, added_sugar, is_healthy,image } = stock;
  //determine if the stock is healthy or not
  try {
    return await db.any(
      'INSERT INTO stocks (chart_name, equity_name, metrics,users) VALUES ($1, $2, $3, $4) RETURNING *',
      [stock.chart_name, stock.equity_name, stock.metrics, stock.users]
    );
  } catch (error) {
    console.log(error.message || error);
    // throw new Error(error.message);
  }
};

const updateStock = async (id, { chart_name, equity_name, metrics }) => {
  try {
    const stock = await db.one(
      'UPDATE stocks SET chart_name=$1, equity_name=$2, metrics=$3 where id=$4 RETURNING *',
      [chart_name, equity_name, metrics, id]
    );
    return stock;
  } catch (error) {
    return error;
  }
};

const deleteStock = async (id) => {
  try {
    return await db.one('DELETE FROM stocks WHERE id=$1 RETURNING *', id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllStocks,
  getAStock,
  createStock,
  updateStock,
  deleteStock,
};
