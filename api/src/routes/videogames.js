const { Router } = require("express");


// Modelos requeridos

// Sequelize
const router = Router();


// Obtener datos de la API
const getApiInfo = require("../utils/functions/getApiInfo")
const getDataInfo = require("../utils/functions/getMyData")


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

      // Claro.. Puedo hacerlo con arrays
      instanceMine = await getDataInfo(name);

    } else { // Case No name
      
      instanceApi = await getApiInfo();
      instanceMine = await getDataInfo();

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
          rating: x.rating,
          description: x.slug,
          // Ingenioso esto no? TODO: Hacer esto pero para mi db..
          genres: x.genres.map((z) => z),
          platforms: x.platforms.map((z) => z)
          
        };
      });

      let allVideogames = [...instanceMine, ...filterCharacters];
      // Envío
      res.send(allVideogames);
    });
  } catch (e) {
    next(e);
  }

  // TODO: Hay alguna manera de combinar esto con async await? La descubrí, simplemente quería dejarlo en modo Promesas para mantener más diversidad de código
});

//-----------------------------------------------------------


module.exports = router;
