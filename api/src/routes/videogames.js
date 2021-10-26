const { Router } = require('express');
require('dotenv').config();

// Modelos requeridos
const { Videogame, Genre } = require('../db.js')

// Sequelize
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const router = Router();

// Variables .env
const {
    API_KEY
  } = process.env;


// Videogames..
//--------------------------------------------------------------
// COMPLETE . Queries - name, page
router.get('/',async(req,res, next) => { 

    // Caja de variables ......................
    let name = req.query.name;
    let page = req.query.page;
    // If no page --> page = 1
    if(!page){
        page=1
    }

    let instanceApi;
    let instanceMine;

    if(name){ // Case query name true
        instanceApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page=${page}&page_size=15`)

        instanceMine = Videogame.findAll({
        include: Genre,
        where: {
            name: { [Op.iLike]: `%${name}%` },
        }

    });
    }else{ // Case No name
        instanceApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)

        instanceMine = Videogame.findAll({
            include: Genre,
            raw:true
        });
    }

    // Same for all
    Promise.all([instanceApi,instanceMine])
    .then((x) => {
        const [instanceApi,instanceMine] = x;

        let filterCharacters = instanceApi.data.results.map((x) => { return {
            id: x.id,  //uuidv4()
            name: x.name, 
            released: x.released,
            image: x.background_image,
            // platforms: x.platforms,
            rating: x.rating,
            description: x.slug}
        })

        let allVideogames = [...instanceMine, ...filterCharacters ]
        // Envío
        res.send(allVideogames);
    });

    // TODO: Hay alguna manera de combinar esto con async await?

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