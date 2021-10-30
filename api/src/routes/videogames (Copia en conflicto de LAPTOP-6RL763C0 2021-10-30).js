const { Router } = require("express");
require("dotenv").config();

// Modelos requeridos
const { Videogame, Genre } = require("../db.js");

// Sequelize
const { Op } = require("sequelize");
const axios = require("axios");
const router = Router();

// Variables .env
const { API_KEY } = process.env;

// TODO: Corregir la forma de paginación...

// Ando pero tengo problemas con devolver cosas a una ruta 
const getApiInfo = async (name) => { 
    // Case no name

    let pageOne = [];
    let pageTwo = [];
    let pageThree = [];

    if(!name){
        pageOne = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`
        );
        pageTwo = await axios.get( 
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`
        );
        pageThree = await axios.get( 
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`
        );
    }else{
        // Case Name
          pageThree = await axios.get( 
            `https://api.rawg.io/api/games?key=${API_KEY}&name=${name}&page_size=40&page=2`
          );
    }


  // Comprobar
  const Final = [
    ...pageOne.data.results,
    ...pageTwo.data.results,
    ...pageThree.data.results,
  ];

  return Final;
};

// Videogames..
//--------------------------------------------------------------
// COMPLETE . Queries - name, page
router.get("/", async (req, res, next) => {
  // Caja de variables ......................
  let instanceApi;
  let instanceMine;
  let name = req.query.name;
  let page = req.query.page;
  // ........................................
  // If no page --> page = 1
  if (!page) {
    page = 1;
  }
  //.........................................

  try {
    if (name) {
      // Si existe un name por ahora lo dejaremos igual
      instanceApi = await getApiInfo(name);

      // Acá va lo de mi DB
      instanceMine = Videogame.findAll({
        include: Genre,
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      });
    } else { // Case No namee
      
      instanceApi = await getApiInfo();
      instanceMine = Videogame.findAll({
        include: Genre,
        raw: true,
      });


    }

    // Comienza la devolución ....................................
    Promise.all([instanceApi, instanceMine]).then((x) => {
      const [instanceApi, instanceMine] = x;

      let filterCharacters = instanceApi.map((x) => {
        return {
          id: x.id, //uuidv4()
          name: x.name,
          released: x.released,
          image: x.background_image,
          // platforms: x.platforms,
          rating: x.rating,
          description: x.slug,
        };
      });

      let allVideogames = [...instanceMine, ...filterCharacters];
      // Envío
      res.send(allVideogames);
    });
  } catch (e) {
    next(e);
  }

  // TODO: Hay alguna manera de combinar esto con async await?
});

//-----------------------------------------------------------

/*

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
        getApiInfo()
        instanceMine = Videogame.findAll({
        include: Genre,
        where: {
            name: { [Op.iLike]: `%${name}%` },
        }

    });
    }else{ // Case No name
        instanceApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=15`)
        getApiInfo()
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


*/

module.exports = router;
