const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('platform',{
        // No es necesario ID
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          }
    },{timestamps : false});
}