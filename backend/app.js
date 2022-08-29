
// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const stockController = require('./controllers/stockController');
const equitiesController = require('./controllers/equitiesController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/stocks', stockController);
app.use('/equities', equitiesController);
app.use('/', (req, res) => {
  res.send("Welcome to Stock tracker Dashboard");
}); //look for the basic route in stockController

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// EXPORT
module.exports = app;



// const axios=require('axios')
// const cheerio=require('cheerio')
// async function getPriceFeed() {
//   const siteUrl = 'https://www.investing.com/equities/';
//   //  jp-morgan-chase-historical-data'
//   const equityArray = [];
//   const { data } = await axios({
//     method: 'GET',
//     url: siteUrl,
//   });
//   console.log(data);
//   const $ = cheerio.load(data);
//   console.log($)
// }

// getPriceFeed()
// // app.get('/api/equity', async (req, res) => {
// //   try {
// //     const equity = await getPriceFeed();
// //     console.log(equity);
// //     return res.status(200).json({
// //       result: equity,
// //     });
// //   } catch (err) {
// //     return res.status(500).json({
// //       err: err.toString(),
// //     });
// //   }
// // });
