const pool = require('../models/index')
const db = require('../models')

exports.create = async (req,res) => {
    try {
        let date = new Date()
        let array_date = [date.getFullYear(),date.getMonth()+1,date.getDate()] // array for date
        let pg_date = `'${array_date[0]}-${array_date[1]}-${array_date[2]}'` // rewrite date as pgadmin format
        console.log(req.body);
        const plate = req.body.plate // get plate
        const cid = req.body.cid //get customer id
        //query for insertion
        const sql_query = `INSERT INTO takes VALUES(${cid}, ${pg_date} ,${plate})` //
        const newTaken = await pool.query(sql_query)
        res.status(200).json(newTaken) //send json to front end empty array
    } catch (err) {
        console.log(err)
        res.status(500).json({message:'unvalied query'})
    }
}

exports.show = async (req,res) => {
    try {
        const sql_query = 'SELECT * FROM takes'
        const all_takes = await pool.query(sql_query)
        console.log(all_takes)
        res.status(200).json(all_takes)
    } catch (err) {
        console.log(err)
        res.status(500).json({message:'unvalied error'})
    }
}