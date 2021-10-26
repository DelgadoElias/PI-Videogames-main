const { DataTypes , Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('platform',{
        id: {
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
        image: {
            type: DataTypes.STRING
        }
    })
}