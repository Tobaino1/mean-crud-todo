const express = require('express');
const bodyParser = require('body-parser');

// const cors = require('cors');

// required files inclusion, db and employee controller
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

//calling the express service
var app = express();
//configuring express middleware to pass data
app.use(bodyParser.json());

// app.use(cors({ origin: 'http://localhost:4200' }));

//configuring & calling the port to serve the app on 
app.listen(3000, () => console.log('Server started at port : 3000'));

//adding the employeeController for use (routing)
app.use('/employees', employeeController);