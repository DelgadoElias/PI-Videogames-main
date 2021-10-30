const { DataTypes , Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('platform',{
        // Tampoco es necesario ID acá
        name: { // COMPLETE 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
        image: {
            type: DataTypes.STRING
        }
    })
}