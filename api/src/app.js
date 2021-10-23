const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); Deprecated
const morgan = require('morgan');

// Aquí nos conectamos al router
const routes = require('./routes/index.js');

// Modularizaciones
const errorHandler = require('./utils/middlewares/errorHandler')
const setHeaders = require('./utils/middlewares/setHeaders');

require('./db.js');

const server = express();

server.name = 'API';


//--------------------------------------------------------------
// Middleware para el success...
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' })); // Venía deprecated
server.use(cookieParser());
server.use(morgan('dev')); // Respuestas express
// --
server.use(setHeaders); // No hay que invocarla bro
// -------------------------------------------------------------

// Conectamos a las rutas. De la misma manera que hicimos en routes
server.use('/', routes);




// -------------------------------------------------------------
// Middleware de control de errores.
server.use(errorHandler);
// -------------------------------------------------------------

module.exports = server;
