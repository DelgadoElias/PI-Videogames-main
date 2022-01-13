// Importación del Router
const { Router } = require('express');

//--------------------------------------------------------------

// Variables de rutas 
const videogameDetailRoutes = require('./videogameDetail');
const videogamesRoutes = require('./videogames');
const genresRoutes = require('./genres');
const platformsRoutes = require('./platforms');


//--------------------------------------------------------------

// Llamamos al router COMPLETE
const router = Router();

//--------------------------------------------------------------

// Conexión de las rutas COMPLETE
router.use('/videogame', videogameDetailRoutes);
router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);
router.use('/platforms', platformsRoutes);


//--------------------------------------------------------------

module.exports = router;