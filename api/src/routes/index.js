const { Router } = require('express');

//--------------------------------------------------------------

const videogameDetailRoutes = require('./videogameDetail');
const videogamesRoutes = require('./videogames');
const genresRoutes = require('./genres');
const platformsRoutes = require('./platforms');


//--------------------------------------------------------------

const router = Router();

//--------------------------------------------------------------

router.use('/videogame', videogameDetailRoutes);
router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);
router.use('/platforms', platformsRoutes);

//--------------------------------------------------------------

module.exports = router;