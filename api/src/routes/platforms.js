const { Router } = require('express');
const { Platform, Videogame } = require('../db.js');
//UUID
const { v4: uuidv4 } = require('uuid');



const router = Router();

// -------------------------------------------------------------
// genres..


router.get('/',async(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    try {
        const instancias = await Platform.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }
    
})
// -------------------------------------------------------------
// POST
// Crea un nuevo género COMPLETE
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
        const newPlatform = await Platform.create({
            name, // No es necesario crear un idea
        })
        res.status(201).send(newPlatform);

    }catch(e) {
        next(e);
    }
    //return Genre.create({name, id:uuid.v4}).then((x) => {res.send(x)})

})


router.post('/:videogameId/platform/:platformId', async function(req, res,next) {
    try {

        
        const{ videogameId,platformId} = req.params;

        // Ligar los videojuegos con sus géneros
        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addPlatform(platformId)
        res.send(200)

    } catch (e) {
        
        next(e)
    }
})

// -------------------------------------------------------------
// PUT
//Actualiza un género -  COMPLETE
router.put('/:id',async(req,res,next) => {

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
        const updated = await Platform.update({name},{
            where: { id: id },
        })
        res.status(201).send(updated);
     } catch (e) {
         next(e);
     }
})
// -------------------------------------------------------------
// DELETE - : COMPLETE
router.delete('/:id',async(req,res,next) => {

    const { id } = req.params
        try {
            const destroyedPlatform = await Platform.destroy({where: {id: id}})
            res.send(200)
        } catch (e) {
            next(e)
        }
    
        //  return Genre.destroy(genre,{ where: { id }}).then((x) => {res.send(x)}).catch((e) => {res.send(e)});
})


module.exports = router;