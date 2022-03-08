const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const errorHandler = require('./utils/middlewares/errorHandler')
const setHeaders = require('./utils/middlewares/setHeaders');

const generadorGenre = require('./utils/functions/genGenres.js')
const generadorPlatform = require('./utils/functions/genPlatforms.js');


require('./db.js');
//--------------------------------------------------------------
const server = express();

server.name = 'API';

//--------------------------------------------------------------
// Middlewares
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// --
server.use(setHeaders);
// -------------------------------------------------------------

server.use('/', routes);

// -------------------------------------------------------------
server.use(errorHandler);
// -------------------------------------------------------------

/**
 * Pre charge items 
*/
generadorGenre();
generadorPlatform();



module.exports = server;
