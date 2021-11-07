// Función obtener datos de la API

const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

async function getApiInfo(name){ 
    // Case no name
    // Caja de variables ......................
    let pageOne = [];
    let pageTwo = [];
    let pageThree = [];

      if(!name){
     // Si no existe name entro acá
        
        // 0 --> 40 ...........................................
        pageOne = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`
        );
        pageOne = [...pageOne.data.results];
        // 40 --> 80 ..........................................
        pageTwo = await axios.get( 
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`
        );
        pageTwo = [...pageTwo.data.results]
        // 80 --> 120 .........................................
        pageThree = await axios.get( 
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`
        );
        pageThree = [...pageThree.data.results]

        // ....................................................
        return[...pageOne, ...pageTwo,...pageThree];
        // ....................................................
     }else{
         // Case Name
           pageOne = await axios.get( 
             `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15&page=2`
           );

           return [...pageOne.data.results];
         // ....................................................
     }
};
module.exports = getApiInfo;