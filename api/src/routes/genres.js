const { Router } = require('express');
const { Genre } = require('../db.js');

const router = Router();

// -------------------------------------------------------------
// genres..
// GET
router.get('/',async(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    res.send('soy la ruta de los genres')
})
// -------------------------------------------------------------
// POST
router.post('/',(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    res.send('soy la ruta de los genres')
})
// -------------------------------------------------------------
// PUT
router.put('/',(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    res.send('soy la ruta de los genres')
})
// -------------------------------------------------------------
// DELETE
router.delete('/',(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    res.send('soy la ruta de los genres')
})



// -------------------------------------------------------------
module.exports = router;