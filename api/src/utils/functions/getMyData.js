// Función obtener datos de la API

// Importaciones necesarias
const { Videogame, Genre, Platform } = require("../../db.js");
const { Op } = require("sequelize");

// TODO: Hacerlo funcionar con el platform  y el Genre a la vez.

// Aquí viene la función
async function getMyData(name){ 

    // Caja de variables ......................
    let noNames = [];

    if(!name){ // ..... ..... 
       
        noNames = Videogame.findAll({
            include: {
              model :Genre,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            },
            raw: true,
          });
          return noNames

    }else{
        // Case Name ..... .....
        withNames = Videogame.findAll({
            include: {
              model :Genre,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            },
            where: {
              name: { [Op.iLike]: `%${name}%` },
            },
          });

          return withNames
        // ....................................................
    }
};
module.exports = getMyData;