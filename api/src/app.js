const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); Deprecated
const morgan = require('morgan');

// Aquí nos conectamos al router
const routes = require('./routes/index.js');

// Modularizaciones
const errorHandler = require('./utils/middlewares/errorHandler')
const setHeaders = require('./utils/middlewares/setHeaders');

// Pruebas que por algún motivo pienso que saldrán bien..
const generadorGenre = require('./utils/functions/genGenres.js')
const generadorPlatform = require('./utils/functions/genPlatforms.js')


require('./db.js');
//--------------------------------------------------------------
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

// Traer todo desde el inicio del servidor...
generadorGenre();
generadorPlatform();



module.exports = server;
