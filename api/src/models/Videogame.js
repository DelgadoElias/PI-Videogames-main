const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('videogame', {
    id: {
      // Use UUID - Diferenciar entre ambas BDD...
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    launched:{
      type: DataTypes.DATE,
    },
    platform:{
      type: DataTypes.INTEGER, // Esto debe ser pasado por la otra BDD como id no?
      // allowNull: false
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