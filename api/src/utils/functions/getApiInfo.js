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
        let uri = pageOne.data.next
        pageOne = [...pageOne.data.results];
        // 40 --> 80 ..........................................
        pageTwo = await axios.get( 
          uri
        );
        uri = pageTwo.data.next

        pageTwo = [...pageTwo.data.results];
        // 80 --> 120 .........................................
        pageThree = await axios.get( 
          uri
        );
        pageThree = [...pageThree.data.results];


          // Si quitamos el flag de page_size nos traerá 20 items nomás, por lo tanto para llegar a 100 deberíamos crear más solicitudes (5 Total)

        // ....................................................
        return[...pageOne, ...pageTwo,...pageThree];
        // ....................................................
     }else{
         // Case Name
           pageOne = await axios.get( 
             `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`
           );

           return [...pageOne.data.results];
         // ....................................................
     }
};
module.exports = getApiInfo;
