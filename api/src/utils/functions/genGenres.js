const axios = require("axios");
const { Genre } = require("../../db.js");

async function generateGenres(){
    const genresInApi = await axios.get(`https://api.rawg.io/api/genres?key=232664f6fc6541e2a787c5d2528caac5&ordering=id`);
    const apiData = genresInApi.data.results;
    // Con esto creamos todos los géneros que hay en la DB creo.
    apiData.forEach((x) => {
        Genre.findOrCreate({
            where: { name : x.name, id : x.id}
        });
    } );

    // No se que devolver jajaja
    return 'Ok';
    //Nota: El id número 9 por alguna razón es 'not Found'
} 

module.exports = generateGenres;