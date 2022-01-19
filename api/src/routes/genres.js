const { default: axios } = require('axios');
const { Router } = require('express');
const { Genre } = require('../db.js');



const router = Router();

// -----------------------s --------------------------------------
// genres..
// GET - Devuelve todos los géneros COMPLETE
router.get('/', async(req, res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    try {
        const instancias = await Genre.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }

})

// ..... Para mandar detalles de un género en específico .....
router.get('/:id', async(req, res, next) => {

    const id = req.params.id;

    /**
     * Obtener un solo género en particular y datos específicos acerca del mismo.
     */

    try {
        let instanciado = await axios.get(`https://api.rawg.io/api/genres/${id}?key=232664f6fc6541e2a787c5d2528caac5`)
        res.send(instanciado.data);
    } catch (e) {
        next(e);
    }

})

// -------------------------------------------------------------

// POST
// Crea un nuevo género COMPLETE
router.post('/', async(req, res, next) => {

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
                name // Generado por default igual
            });
            res.status(201).send(newGenre);

        } catch (e) {
            next(e);
        }
        //return Genre.create({name, id:uuid.v4}).then((x) => {res.send(x)})

    })
    // -------------------------------------------------------------
    // PUT
    //Actualiza un género - : COMPLETE
router.put('/:id', async(req, res, next) => {

        /**
         * Obtener todos los tipos de géneros de videojuegos 
         * posibles.
         * 
         * En una primera instancia debemos traerlos desde rawg y 
         * guardarlos en us propia BDD y ya usarlos desde allí.
         */
        const { name } = req.body;
        const id = req.params.id;
        console.log(req.body);
        //  return Genre.update(genre,{ where: { id }}).then((x) => {res.send(x)});

        try {
            const updated = await Genre.update({ name }, {
                where: { id: id },
            })
            res.status(201).send(updated);
        } catch (e) {
            next(e);
        }
    })
    // -------------------------------------------------------------
    // DELETE - : COMPLETE
router.delete('/:id', async(req, res, next) => {

    const { id } = req.params
    try {
        const destroyedGenre = await Genre.destroy({ where: { id: id } })
        res.send(200)
    } catch (e) {
        next(e)
    }

    //  return Genre.destroy(genre,{ where: { id }}).then((x) => {res.send(x)}).catch((e) => {res.send(e)});
})



// -------------------------------------------------------------
module.exports = router;