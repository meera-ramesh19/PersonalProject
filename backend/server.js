// DEPENDENCIES
require('dotenv').config();
const app = require('./app.js');

// CONFIGURATION

const PORT = process.env.PORT || 3013;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
