// DEPENDENCIES

const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// EXPRESS CONFIGURATION:  sets up the basic properties for our express server
// Tells node that I'm creating an "express" server
const app = express();

// Sets an initial port. listener to use it.
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to serve static assets directly
app.use(express.static('public'));


// ROUTER: These routes give the server a way of how to respond if users visit/request data from differents URLs.

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// LISTENER: This code start the server

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
