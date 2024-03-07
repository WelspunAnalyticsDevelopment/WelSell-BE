const express = require('express');
const bodyParser = require('body-parser');
const { host } = require('./Config'); // Update the path accordingly
const app = express();
const cors = require('cors');

const path = require('path');
const fs = require('fs');

// const versionRoutes = require('./Version/Version');
const summaryRoutes = require('./Summary/Summary');
const simulationRoutes = require('./Simulation/Simulation');
const { get } = require('http');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen( process.env.PORT ||8080, () => {
  console.log(`Server is running on port ${ process.env.PORT || 8080}`);
});



app.use(bodyParser.json({ limit: '30mb' }));
// app.use(express.static('client/build'));

// app.use('/version',versionRoutes);




app.use('/summary', summaryRoutes);

app.use('/simulation', simulationRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });




