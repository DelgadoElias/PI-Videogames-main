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
router.post('/',async(req,res,next) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    const { name } = req.body;

    // Async Await
    try {
        const newGenre = await Genre.create({
            name,
            id:uuid.v4(), // Generado por default igual
        })
        res.status(201).send(newGenre);

    }catch(e) {
        next(e);
    }
    //return Genre.create({name, id:uuid.v4}).then((x) => {res.send(x)})

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