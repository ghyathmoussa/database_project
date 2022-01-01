const { sequelize, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    const Station = sequelize.define('station',{
        dnumber:{
            type:Sequelize.INTEGER
        },
        city:{
            type:Sequelize.STRING
        },
        dname:{
            type:Sequelize.STRING
        }
    });
    return Station;
}