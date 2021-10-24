// Inicializamos sequelize

const { DataTypes } = require("sequelize");

// Módulo necesario..
// TIP: No se deben usar palabras en español..
module.exports = (sequelize) => {
    return sequelize.define('genre', {
        id: {
            // Use UUID - Diferenciar entre ambas BDD...
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            // Nombre de nuestro genero
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

/**
 * Propiedades:
 * ID
 * Nombre
 */


// WARNING: Todo lo que nosotros no desarrollemos, sequelize lo
//          va a generar..