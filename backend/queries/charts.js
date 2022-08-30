const db = require('../db/dbConfig.js');

const getAllEquities = async () => {
  try {
    const allEquities = await db.any(
      'SELECT DISTINCT equity FROM historical_data'
    );
    return allEquities;
  } catch (error) {
    return error;
  }
};

const getAllCharts = async () => {
  try {
    const allCharts = await db.any('SELECT * FROM charts');
    return allCharts;
  } catch (error) {
    return error;
  }
};

const getAChart = async (id) => {
  try {
    const chart = await db.one('SELECT * FROM charts  WHERE id=$1', id);
    return chart;
  } catch (error) {
    return error;
  }
};

const createChart = async (chart) => {
  try {
    return await db.any(
      'INSERT INTO charts (chart_name, equity_name, metrics,users) VALUES ($1, $2, $3, $4) RETURNING *',
      [chart.chart_name, chart.equity_name, chart.metrics, chart.users]
    );
  } catch (error) {
    console.log(error.message || error);
    // throw new Error(error.message);
  }
};

const updateChart = async (id, { chart_name, equity_name, metrics }) => {
  try {
    const chart = await db.one(
      'UPDATE charts SET chart_name=$1, equity_name=$2, metrics=$3 where id=$4 RETURNING *',
      [chart_name, equity_name, metrics, id]
    );
    return chart;
  } catch (error) {
    return error;
  }
};

const deleteChart = async (id) => {
  try {
    return await db.one('DELETE FROM charts WHERE id=$1 RETURNING *', id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEquities,
  getAllCharts,
  getAChart,
  createChart,
  updateChart,
  deleteChart,
};
