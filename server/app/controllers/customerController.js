const pool = require('../models/index')
const db = require('../models')
//create and add to database

// ************ with pg and pool *******************

exports.create = async (req, res) => {
    try {

        console.log(req.body)
        const customer = req.body
        let customerID = await pool.query("select nextval('customer_id')")
        customerID = parseInt(customerID.rows[0].nextval)
        console.log(customerID)
        const newCustomer = await pool.query(
            "INSERT INTO customer(cid,cname,clname) VALUES($1, $2, $3) RETURNING *",
            [customerID, customer.cname, customer.clname]
        )
        res.status(200).json(newCustomer);

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
        const sql_query = 'SELECT * FROM customer'
        const customers = await pool.query(sql_query)
        res.status(200).json(customers)
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
        const cid = req.params;
        const sql_query = `SELECT * FROM customer WHERE cid = '${cid.cid}'`;
        const customer = await pool.query(sql_query)
        res.status(200).json(customer)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// update item by id
exports.update = async (req, res) => {
    try {
        const cid = req.body.id
        console.log(cid)
        const content = req.body
        const sql_query = `UPDATE customer SET cname = $1, clname = $2 WHERE cid = '${cid}'`
        const updatedCustomer = await pool.query(sql_query, [content.cname, content.clname])
        console.log(updatedCustomer)
        res.status(200).json(updatedCustomer);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// delete item by id
exports.delete = async (req, res) => {
    try {
        const cid = req.body.cid
        console.log(req.body)
        const sql_query = `DELETE FROM customer WHERE cid = ${cid}`
        const deletedCustomer = await pool.query(sql_query);
        console.log(deletedCustomer)
        res.status(200).json(deletedCustomer)        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}
