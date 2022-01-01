const { sequelize, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    const Customer = sequelize.define('customer',{
        cid:{
            type:Sequelize.INTEGER
        },
        cname:{
            type:Sequelize.STRING
        },
        clname:{
            type:Sequelize.STRING
        }
    });
    return Customer;
}