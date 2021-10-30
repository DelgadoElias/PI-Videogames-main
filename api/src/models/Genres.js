// Inicializamos sequelize

const { DataTypes } = require("sequelize");

// Módulo necesario..
// TIP: No se deben usar palabras en español..
module.exports = (sequelize) => {
    return sequelize.define('genre', {
        // Ahora que lo pienso, no es necesario un ID. Si total vamos a pasar los géneros por ID
        
        // Name del género
        name: { //COMPLETE
            // Nombre de nuestro genero
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

/**
 * Propiedades:
 * ID - Generado por Sequelize o mediante lo que nos pasan.
 * Nombre
 */


// WARNING: Todo lo que nosotros no desarrollemos, sequelize lo
//          va a generar..