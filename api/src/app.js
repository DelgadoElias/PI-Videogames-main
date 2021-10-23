const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); Deprecated
const morgan = require('morgan');

// Aquí nos conectamos al router
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

//--------------------------------------------------------------
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' })); // Venía deprecated
server.use(cookieParser());
server.use(morgan('dev')); // Respuestas express
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from - http://localhost:3000
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next(); // Yo no quiero que muera la función acá.
});
// -------------------------------------------------------------

// Conectamos a las rutas. De la misma manera que hicimos en routes
server.use('/', routes);




// -------------------------------------------------------------
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
// -------------------------------------------------------------

module.exports = server;
