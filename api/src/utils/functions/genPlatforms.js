const axios = require("axios");
const { Platform } = require("../../db.js");

async function generatePlatforms(){
    // Traeme la data
    const genresInApi = await axios.get(`https://api.rawg.io/api/platforms?key=232664f6fc6541e2a787c5d2528caac5`);
    const apiData = genresInApi.data.results;

    // Creame las plataformas
    apiData.forEach((x) => {
        Platform.findOrCreate({
            where: { name : x.name}
        });
    } );

    return 'Ok';


} 

module.exports = generatePlatforms;