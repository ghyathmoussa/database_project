const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')
const Pool = require('pg').Pool
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     port:dbConfig.PORT,
//     dialect: dbConfig.dialect,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// })

const pool = new Pool({
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    database: dbConfig.DB
});

// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.taxi = require('./taxi.model.js')(sequelize,Sequelize)
// db.customer = require('./customer.model')(sequelize,Sequelize)
// db.station = require('./station.model')(sequelize,Sequelize)
// db.taxiDriver = require('./taxiDriver.model.js')(sequelize,Sequelize)

//module.exports = db;

module.exports = pool;
