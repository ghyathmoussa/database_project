// const { sequelize, Sequelize } = require("Sequlize");

module.exports = (sequelize,Sequelize) => {
    console.log('taxi model')
    const Taxi = sequelize.define('taxi',{
        plate:{
            type:Sequelize.STRING
        },
        model:{
            type:Sequelize.STRING
        },
        snumber:{
            type:Sequelize.INTEGER
        }
    });
    console.log('Taxi Model: ',Taxi)
    return Taxi;
}