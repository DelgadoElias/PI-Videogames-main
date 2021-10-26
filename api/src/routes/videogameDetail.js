const { Router } = require('express');
// UUID
const { v4: uuidv4 } = require('uuid');
// Models
const { Videogame } = require('../db.js')
const axios = require('axios');
require('dotenv').config();

// Comienza la magia.
const router = Router();

// -------------------------------------------------------------

const {
    API_KEY
  } = process.env;



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
        
        // let instanceApi = axios.get(`https://api.rawg.io/api/games/3498?key=232664f6fc6541e2a787c5d2528caac5`).then((x) =>{
            
        //     res.send(x.data)
        // }).catch(e => next(e))

        try {
            let instanceApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=232664f6fc6541e2a787c5d2528caac5`)

            res.send(instanceApi.data)

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
    // Recibe los datos recolectados desde el formulario controlado de la ruta de reación de videojuego por body.. COMPLETE
    
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
    
    
    // Conforme a los datos del formulario 'videogame'...
    // Creamos un videojuego...
    const videogame = req.body;
    console.log(req.body);
    
    // Aquí vamos con las pruebas nuevas
    try {
        const instancias = await Videogame.create(
            {...videogame,
            id: uuidv4()});
        res.send(instancias);

    }catch(error){next(error)}; 
        // No findByPk --> UUID

        // Bruto a optimizado, no al revés--
});
//Agrega géneros a un videojuego COMPLETE
router.post('/:videogameId/genre/:genreId', async function(req, res,next) {
    try {

        //TODO: Code here COMPLETE
        const{ videogameId,genreId} = req.params;

        // Ligar los videojuegos con sus géneros
        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addGenres(genreId)
        res.send(200)

    } catch (e) {
        //TODO: Error Here COMPLETE
        next(e)
    }
})

// -------------------------------------------------------------
// PUT TODO:  COMPLETE
router.put('/:id',async(req,res,next) => {
    
       
    
    const { name, description, launched, platform, image } = req.body;
    const id = req.params.id; 

    let videogame = {}
    // Guardo todas las propiedades que me vengan del body para cambiar
    // Ya que no me pueden venir todas, si es undefined no la agarro.
    for(const property in req.body){
        if(property !== undefined){
            videogame[property] = req.body[property];
        }
    }

        // TODO: Poder hacerlo en async await COMPLETE

            // Promise Mode
            // return Videogame.update({...videogame},{ where: { id }}).then((x) => {res.send(x)});
            // AyncAwait Mode
            const updateGame = await Videogame.update({...videogame},{ where: {}})
            res.send(updateGame);

})
// -------------------------------------------------------------
// DELETE TODO: COMPLETE

// Sicario, mata al del id
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