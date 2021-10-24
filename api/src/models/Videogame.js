const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      // Use UUID - Diferenciar entre ambas BDD...
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    launched:{
      type: DataTypes.DATE,
    },
    platform:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

// TODO: Models videogame, genre Many to Many


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