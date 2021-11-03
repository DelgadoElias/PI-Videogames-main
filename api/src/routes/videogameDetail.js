const { Router } = require('express');
// UUID
const { v4: uuidv4 } = require('uuid');
// Models
const { Videogame, Genre, Platform } = require('../db.js')
const axios = require('axios');
require('dotenv').config();

// Comienza la magia.
const router = Router();

// -------------------------------------------------------------

// Hubo una vez una necesidad de API_KEY por aquí

// GET

// Devuelve del detalle de un videojuego en particular COMPLETE
router.get('/:id',async(req,res,next) => {
    // Obtener el detalle de un videojuego en particular 
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    const { id } = req.params
    
    if(id.length > 8){

        const videogame = await Videogame.findByPk(id)
        res.send(videogame)
   
    }else{
        
        // axios.get(`https://api.rawg.io/api/games/3498?key=232664f6fc6541e2a787c5d2528caac5`).then((x) =>{
            
        //     res.send(x.data)
        // }).catch(e => next(e))

        try {
            let instanceApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=232664f6fc6541e2a787c5d2528caac5`)
            // ..... ..... ..... ..... .....
            instanceApi = instanceApi.data
           let returnObj = {
            background_image: instanceApi.background_image,
            name : instanceApi.name,
            genres: instanceApi.genres,
            platforms : instanceApi.platforms,
            rating: instanceApi.rating,
            description_raw: instanceApi.description_raw,
            released: instanceApi.released,
           }

            res.send(returnObj)

        } catch (e) {
            next(e)
        }
        
                 // // Por tratar de hardcodearla te trabaste...
        // // Tranqui, vas a llegar
    }
    //https://api.rawg.io/api/games/{id}

})

// -------------------------------------------------------------
// POST

//Crea un videojuego COMPLETE
router.post('/',async(req,res, next) => {
    
    
    /**
     * Formulario enviado por body...
     * Nombre:
     * Descripción:
     * Lanzamiento:
     * Rating:
     * 
     * 
     * Observaciones:
     * - Posibilidad de seleccionar/agregar varios géneros.
     * - Posibilidad de seleccionar/agregar varias plataformas.
     * 
     * 
     */

        // ..... ..... ..... ..... ..... .....

    const { name, description, released, image, rating, platforms, genres } = req.body;

        // ..... ..... ..... ..... ..... .....

    /*
    videogame = {
        name,
        description,
        released,
        image,
        rating,
        createdInDb,
        platforms,
        genres,
    } */
    
    // Aquí vamos con las pruebas nuevas
    try {
        const instancias = await Videogame.create(
            {name,
            description, 
            released,
            image,
            rating,
            createdInDb : true,
            id: uuidv4()
        }); 
        // ..... ..... ..... ..... ..... .....
        // Los géneros y plataformas ya los tengo, habrá que unirlos.
        let genreDb = await Genre.findAll({
            where: { name : genres}
        });
        let platformDb = await Platform.findAll({
            where: { name : platforms}
        });
        // ..... ..... ..... ..... ..... .....
        instancias.addGenres(genreDb);
        instancias.addPlatform(platformDb);
        // ..... ..... ..... ..... ..... .....
        res.send('Videojuego creado correctamente!' + instancias.name);
        // ..... ..... ..... ..... ..... .....
        
    }catch(error){next(error)}; 

});
//Agrega géneros a un videojuego COMPLETE
router.post('/:videogameId/genre/:genreId', async function(req, res,next) {
    try {

        
        const{ videogameId,genreId} = req.params;

        // Ligar los videojuegos con sus géneros
        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addGenres(genreId)
        res.send(200)

    } catch (e) {
        
        next(e)
    }
})

// -------------------------------------------------------------
// PUT 
router.put('/:id',async(req,res,next) => {
    
    
    const { name, description, launched, platform, image } = req.body;
    const id = req.params.id; 

    try {
        
        let videogame = {}
        // Guardo todas las propiedades que me vengan del body para cambiar
        // Ya que no me pueden venir todas, si es undefined no la agarro.
        for(const property in req.body){
            if(property !== undefined){
                videogame[property] = req.body[property];
            }
        }
    
            // Complete: Poder hacerlo en async await
    
                // Promise Mode
                // return Videogame.update({...videogame},{ where: { id }}).then((x) => {res.send(x)});
                // AyncAwait Mode
                const updateGame = await Videogame.update({...videogame},{ where: {}})
                res.send(updateGame);
    } catch (e) {
        next(e);
    }



})
// -------------------------------------------------------------
// DELETE: COMPLETE

// Sicario, mata al del id por una Henry Coin
router.delete('/:id',async(req,res, next) => {
    

    /** --> Promise Mode
     * return Videogame.destroy({
     * where:{id:id}}).then((x) => {res.send(x);})
     */

    // Async Await Mode
    const { id } = req.params
        try {
            const destroyedGame = await Videogame.destroy({where: {id: id}})
            res.send(200)
        } catch (e) {
            next(e)
        }
    
})


// -------------------------------------------------------------

module.exports = router;