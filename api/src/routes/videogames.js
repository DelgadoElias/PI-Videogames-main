const { Router } = require('express');
// Modelos requeridos
const { Videogame, Genre } = require('../db.js')

// Sequelize
const { Op } = require("sequelize");
const axios = require('axios');
const router = Router();

// Videogames..
//--------------------------------------------------------------
// COMPLETE . Queries - name, page
router.get('/',async(req,res, next) => { 

    let instanceApi = axios.get('https://api.rawg.io/api/games?key=232664f6fc6541e2a787c5d2528caac5')

    let instanceMine = Videogame.findAll({
        include: Genre,
        raw:true
    });
    // TODO: Hay alguna manera de combinar esto con async await?
    Promise.all([instanceApi,instanceMine])
    .then((x) => {
        const [instanceApi,instanceMine] = x;

        let filterCharacters = instanceApi.data.results.map((x) => { return { 
            name: x.name, 
            released: x.released,
            image: x.background_image,
            platforms: x.platforms, }})
        console.log(instanceApi.data);
        console.log(instanceMine);
        res.send(instanceMine);
    });

})

//-----------------------------------------------------------
// Create
// --------------------
// -------------------------------
// -------------------------------
// ----------------
// -----------------------------------------------------------

/*

router.get('/',async(req,res, next) => { 

    // Puede recibir parámetros por query..
    let { name, page } = req.query; 
    
    if(!page){
        page = 1
    }
    let pagination = 15 * page
    let begining = 15 * (page -1)

    // ------------------------------------


     if(name !== undefined){ // COMPLETE
        try {
            const finder = await Videogame.findAll({ include: Genre},{ offset: begining, limit: pagination },{where: {
                name: {
                  [Op.like]: `%${name}%`
                },
                
              }});
             // TODO: Caso no hay página para mostrar - FRONTEND
            return res.send(finder);
        } catch (e) {
            next(e)
        }
    }


    // ----------------------------------------------------------------
    // Case: No Query params
    //Async Await Mode
        try { // COMPLETE
            const instancias = await Videogame.findAll({ offset: begining, limit: pagination });
            // TODO: Caso no hay página para mostrar - FRONTEND
            return res.send(instancias);
        } catch (e) {
            next(e)
        }

        // Promise Mode
        // Videogame.findAll().then( x => res.send(x)).catch((x) => { next(x) })


        // TODO: instancias es un Array, hay que tomar los primeros 15 para mostrar.
      
    
})

*/ 


module.exports = router;