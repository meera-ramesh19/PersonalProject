//pertain to the application
//Dependencies

const express = require('express');
const cors = require('cors');

//configuration
const app = express(); //invoke express and save in app

//Middleware
app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
  res.send('Welcome to Stock Tracking Dashboard');
}); //look for the basic route in songController
app.get('*', (req, res) => {
  res.status(404).send('Not found');
});
module.exports = app;
