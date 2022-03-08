const { Router } = require('express');
const { Platform, Videogame } = require('../db.js');

const router = Router();


/**
 * Get all the platforms
 */
router.get('/',async(req,res) => {

    try {
        const instancias = await Platform.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }
    
})

/**
 * Post a new platform
 * @description post a new platform with the data sent in body params
 */
router.post('/',async(req,res,next) => {

    const { name } = req.body;

    try {
        const newPlatform = await Platform.create({
            name,
        })
        res.status(201).send(newPlatform);

    }catch(e) {
        next(e);
    }

})

/**
 * Bind an existing platform to a existing game
 * @description Binds the given platform to a videogame
 */
router.post('/:videogameId/platform/:platformId', async function(req, res,next) {
    try {
        
        const{ videogameId,platformId} = req.params;

        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addPlatform(platformId)
        res.send(200)

    } catch (e) {
        
        next(e)
    }
})

/**
 * Update an existing platform
 */
router.put('/:id',async(req,res,next) => {

     const { name } = req.body;
     const id = req.params.id; 

     try {                                  
        const updated = await Platform.update({name},{
            where: { id: id },
        })
        res.status(201).send(updated);
     } catch (e) {
         next(e);
     }
})

/**
 * Destroy a platform from the db
 * @params {String} id - The id of the platform to destroy
 */
router.delete('/:id',async(req,res,next) => {

    const { id } = req.params
        try {
            const destroyedPlatform = await Platform.destroy({where: {id: id}})
            res.send(200)
        } catch (e) {
            next(e)
        }
    
})


module.exports = router;