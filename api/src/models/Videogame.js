const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('videogame', {
    id: { //COMPLETE
      // Use UUID - Diferenciar entre ambas BDD...
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: { // COMPLETE 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: { //TODO:
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{ //TODO:
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.INTEGER
    },
    createdInDb: { //TODO:
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};

// TODO: Models videogame, genre Many to Many COMPLETE


/**
 * Propiedades dle videojuego:
 * ID*
 * Nombre*
 * Descripción*
 * Fecha de lanzamiento
 * Rating
 * Plataformas*
 * 
 */