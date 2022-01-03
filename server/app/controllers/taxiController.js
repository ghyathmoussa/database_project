const pool = require('../models/index')
const db = require('../models')
const { type, json } = require('express/lib/response')
const Taxi = db.taxi
// const Op = db.Sequelize.Op

//create and add to database

// ************************* with sequelize ******************
// exports.create = (req,res) => {
//     // valied request
//     console.log(req.body)
//     if(!req.body.plate){
//         res.status(400).json({message:'content can not be empty'})
//         return;
//     }
//     const taxi = {
//         plate:req.body.plate,
//         model:req.body.model,
//         dnumber:req.body.dnumber
//     }
//     // console.log('taxi object: ',taxi)
//     Taxi.create(taxi)
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => {
//             console.log('creation error: ',err);
//             res.status(500).json({message: 'creation'})
//         })
// }
// ************ with pg and pool *******************

exports.create = async (req, res) => {
    try {

        console.log(req.body)
        const taxi = req.body
        const newTaxi = await pool.query(
            "INSERT INTO taxi(plate,model,snumber) VALUES($1, $2, $3) RETURNING *",
            [taxi.plate, taxi.model, taxi.snumber]
        )
        res.status(200).json(newTaxi);

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ message: err.message })
    }
}

// show all user
// ************** using sequelize ************
// exports.findAll = (req,res) => {
//     const taxi = 220
//     console.log('query: ',req.query)
//     let condition = taxi ? { sunmber: { [Op.iLike]: taxi } } : null;

//     Taxi.findAll({where:{plate:'37'}})
//         .then(data => {
//             console.log(data)
//             res.status(200)
//         })
//         .catch(err => console.log(err))
// }
/* ************ using pg and pool */
exports.findAll = async (req, res) => {
    try {
        console.log(req.body)
        const sql_query = 'SELECT * FROM taxi'
        const taxis = await pool.query(sql_query)
        res.status(200).json(taxis)
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
        const plate = req.params;
        const sql_query = `SELECT * FROM taxi EXCEPT SELECT * FROM taxi WHERE plate NOT IN (SELECT plate FROM taxi WHERE plate = '${plate.plate}')`;
        const taxi = await pool.query(sql_query)
        res.status(200).json(taxi)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

exports.findWithOutPlate = async (req,res) => {
    try{
        console.log(req.params.plate)
        const plate = req.params;
        const sql_query = `
            select station_drivers('${plate}')
        `;
        const taxi = await pool.query(sql_query)
        console.log(taxi.rows[0].toplam_taxi)
        res.status(200).json(taxi)
    }catch(err){
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// update item by id
exports.update = async (req, res) => {
    try {
        const plate = req.body.plate
        const content = req.body
        const sql_query = `UPDATE taxi SET model = $1, snumber = $2 WHERE plate = '${plate}'`
        const updatedTaxi = await pool.query(sql_query, [content.model, content.snumber])
        res.status(200).json(updatedTaxi);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}

// delete item by id
exports.delete = async (req, res) => {
    try {
        const plate = req.body.plate
        const sql_query = `DELETE FROM taxi WHERE plate = '${plate}'`
        const deletedTaxi = await pool.query(sql_query);
        console.log(deletedTaxi)
        res.status(200).json(deletedTaxi)        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'bad request' })
    }
}


exports.allDriversData = async (req,res) => {
    try {
        const sql_query = `
            SELECT taksici_bilgi()
        `
        const taxiDriverInfo = await pool.query(sql_query)

        console.log(taxiDriverInfo)
        res.status(200).json(taxiDriverInfo.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'unvalied query' })

    }
}

