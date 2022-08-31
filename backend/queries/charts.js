const db = require('../db/dbConfig.js');

const getEquityNames = async () => {
  try {
    const equityNames = await db.any(
      'SELECT DISTINCT equity FROM historical_data'
    );
    return equityNames;
  } catch (error) {
    return error;
  }
};

const getAllEquities = async () => {
  try {
    const allEquities = await db.any('SELECT * FROM historical_data');
    console.log(allEquities);
    return allEquities;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const getChartData = async () => {
  try {
  
    // if metric is price: 
    // const chartData = await db.any(
    //   'SELECT date, price FROM charts RIGHT JOIN historical_data ON charts.equity_name = historical_data.equity'
    // );
    // if metric is open:
    const chartData = await db.any(
      'SELECT * FROM charts RIGHT JOIN historical_data ON charts.equity_name = historical_data.equity'
    );
    console.log(chartData)
    return chartData;
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
  getEquityNames,
  getAllEquities,
  getChartData,
  getAllCharts,
  getAChart,
  createChart,
  updateChart,
  deleteChart,
};
