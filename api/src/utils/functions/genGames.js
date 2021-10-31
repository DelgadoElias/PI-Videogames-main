const { Videogame } = require("../../db.js");
const getApiInfo = require("./getApiInfo.js");

async function generateGames(){
    const gamesInApi = await getApiInfo();
    // Con esto creamos todos los géneros que hay en la DB creo.

    gamesInApi.forEach((x) => {
        Videogame.findOrCreate({
            where: { name : x.name }
        });
    } );

    // No se que devolver jajaja
    return 'Ok';

} 

module.exports = generateGames;