const db = require('../db/dbConfig.js');

const getEquityNames = async () => {
  try {
    const equityNames = await db.any(
      'SELECT DISTINCT equity from historical_data'
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

const getChartData = async (equity, chart, metrics) => {
  let chartData;
  try {
    let eq = equity.toLowerCase();
    let char = chart.toLowerCase();
    url_string =
      "SELECT * from charts JOIN historical_data ON LOWER(REPLACE(charts.equity_name, ' ', '')) = LOWER(REPLACE(historical_data.equity, ' ', '')) WHERE LOWER(REPLACE(charts.chart_name, ' ', '')) = '" +
      char +
      "' AND LOWER(REPLACE(historical_data.equity, ' ', '')) = '" +
      eq +
      "' ORDER BY historical_data.date ASC";

    chartData = await db.any(url_string);
    console.log('inside charts.js chartData', chartData);
    const price_arr = [];
    const open_arr = [];
    const low_arr = [];
    const high_arr = [];
    const date_arr = [];
    let metric_vals = [];
   
    const metric = chartData[0].metrics.toString().toLowerCase();
    console.log('in side charts.js metric', metric);
    for (let i = 0; i < chartData.length; i++) {
      date_arr.push(chartData[i].date);
      price_arr.push(chartData[i].Price);
      high_arr.push(chartData[i].High);
      open_arr.push(chartData[i].Open);
      low_arr.push(chartData[i].Low);
    }

    if (metric === 'price') {
      metric_vals = price_arr;
    } else if (metric === 'open') {
      metric_vals = open_arr;
    } else if (metric === 'high') {
      metric_vals = high_arr;
    } else if (metric === 'low') {
      metric_vals = low_arr;
    }

    if (chartData.length > 0) {
      let final_data = {
        chart_name: chartData[0].chart_name,
        equity_name: chartData[0].equity_name,
        metric: metric,
        price: price_arr,
        high: high_arr,
        low: low_arr,
        open: open_arr,
        dates: date_arr,
        base_metric: metric_vals,
      };
      return final_data;
    }

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
