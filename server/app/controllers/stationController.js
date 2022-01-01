const pool = require('../models/index')
//create and add to database

// ************ with pg and pool *******************

exports.create = async (req, res) => {
    try {

        console.log(req.body)
        const station = req.body
        const newStation = await pool.query(
            "INSERT INTO station(snumber,city,sname) VALUES($1, $2, $3) RETURNING *",
            [station.snumber, station.city, station.sname]
        )
        res.status(200).json(newStation);

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ message: "unvalied creation" })
    }
}

// show all user
/* ************ using pg and pool */
exports.findAll = async (req, res) => {
    try {
        console.log(req.body)
        const sql_query = 'SELECT * FROM station'
        const stations = await pool.query(sql_query)
        res.status(200).json(stations)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// show one by id
/* ********* sith pg and pool ********** */
exports.findOne = async (req, res) => {
    try {
        console.log(req.params.plate)
        const snumber = req.params;
        const sql_query = `SELECT * FROM station WHERE cid = '${snumber.snumber}'`;
        const station = await pool.query(sql_query)
        res.status(200).json(station)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// update item by id
exports.update = async (req, res) => {
    try {
        const snumber = req.params
        console.log(snumber.snumber)
        const content = req.body
        const sql_query = `UPDATE station SET city = $1, sname = $2 WHERE snumber = '${snumber.snumber}'`
        const updatedStation = await pool.query(sql_query, [content.city, content.sname])
        res.status(200).json(updatedStation);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// delete item by id
exports.delete = async (req, res) => {
    try {
        const snumber = req.params.snumber
        const sql_query = `DELETE FROM station WHERE snumber = '${snumber}'`
        const deletedStation = await pool.query(sql_query);
        console.log(deletedStation)
        res.status(200).json(deletedStation)
    } catch (error) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

exports.showModels = async (req, res) => {
    //console.log(req.body.sname)
    const sql_query = `select model from taxi_model where sname = '${req.body.sname}'`
    const models = await pool.query(sql_query)
    console.log(models)
    res.status(200).json(models.rows)
}

exports.countDrivers = async (req, res) => {
    try {
        const sql_query = `
    SELECT COUNT(*), snumber FROM taxi_drivers 
    INNER JOIN taxi ON taxi_drivers.plate = taxi.plate GROUP BY taxi.snumber HAVING COUNT(*) <> 0
    `
        const drivers = await pool.query(sql_query)

        console.log(drivers)
        res.status(200).json(drivers.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'unvalied query' })
    }
}

exports.countDriversOneStation = async (req, res) => {
    const station = req.params.snumber
    try {
        const sql_query = `
            SELECT station_drivers(${station})
        `
        const driversCount = await pool.query(sql_query)

        console.log(driversCount)
        res.status(200).json(driversCount.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'unvalied query' })

    }
}
