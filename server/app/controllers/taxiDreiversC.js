const pool = require('../models/index')
//create and add to database

// ************ with pg and pool *******************

exports.create = async (req, res) => {
    try {

        console.log(req.body)
        const taxiDriver = req.body
        const newTaxiDriver = await pool.query(
            "INSERT INTO taxi_drivers(id,name,surname,plate) VALUES($1, $2, $3, $4) RETURNING *",
            [taxiDriver.id,taxiDriver.name, taxiDriver.surname, taxiDriver.plate]
        )
        res.status(200).json(newTaxiDriver);

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
        const sql_query = 'SELECT * FROM taxi_drivers'
        const taxiDrivers = await pool.query(sql_query)
        res.status(200).json(taxiDrivers)
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
        const id = req.params.id;
        const sql_query = `SELECT * FROM taxi_drivers WHERE id = ${id}`;
        const taxiDriver = await pool.query(sql_query)
        res.status(200).json(taxiDriver)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// update item by id
exports.update = async (req, res) => {
    try {
        const id = req.body.id
        console.log(id)
        const content = req.body
        const sql_query = `UPDATE taxi_drivers SET name = $1, surname = $2, plate = $3 WHERE id = ${id}`
        const updatedTaxiDriver = await pool.query(sql_query, [content.name,content.surname,content.plate])
        res.status(200).json(updatedTaxiDriver);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// delete item by id
exports.delete = async (req, res) => {
    try {
        const id = req.body.id
        const sql_query = `DELETE FROM taxi_drivers WHERE id = ${id}`
        const deletedTaxiDriver = await pool.query(sql_query);
        console.log(deletedTaxiDriver)
        res.status(200).json(deletedTaxiDriver)        
    } catch (error) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}
