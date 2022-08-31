//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const charts = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
  getAllCharts,
  getChartData,
  getAChart,
  createChart,
  updateChart,
  deleteChart,
} = require('../queries/charts');

const { checkName } = require('../validations/checkCharts');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//*******************CHECK FOR THE VALUE  */
// insert into items_ver (item_id, name, item_group)
// select item_id, name, item_group from items where item_id=2;

//Index
charts.get('/', async (req, res) => {
  console.log('get all /');

  const allCharts = await getAllCharts();
  console.log(allCharts);
  if (allCharts[0]) {
    res.status(200).json({
      success: true,
      payload: allCharts,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//ChartInfo
charts.get('/data', async (req, res) => {
  const chartData = await getChartData();
  console.log(chartData);
  if (chartData[0]) {
    res.status(200).json({
      success: true,
      payload: chartData,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});
//

//Show
charts.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const chart = await getAChart(id);
  if (chart.id) {
    res.status(200).json({
      success: true,
      payload: chart,
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
charts.post('/new', checkName, async (req, res) => {
  try {
    const addChart = await createChart(req.body);
    res.status(200).json({
      success: true,
      payload: addChart,
    });
  } catch (error) {
    // console.log('Caught in error');
    console.log(error.message);
    res.status(404).json({ success: false });
  }
});

//DELETE
charts.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedChart = await deleteChart(id);
  if (deletedChart) {
    if (deletedChart.id) {
      res.status(200).json({
        success: true,
        payload: deletedChart,
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
      payload: deletedChart,
    });
  }
});

//update
charts.put('/:id', checkName, async (req, res) => {
  console.log('Put /:id');
  const { id } = req.params;
  console.log(id, req.body);
  const updatedChart = await updateChart(id, req.body);
  console.log(updatedChart.id);
  if (updatedChart.id) {
    res.status(200).json({
      success: true,
      payload: updatedChart,
    });
  } else {
    res.status(404).json({
      success: false,
      payload: 'bad request',
    });
  }
});

module.exports = charts;
