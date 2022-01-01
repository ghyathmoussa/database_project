const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const bodyParser = require('body-parser')
// const db = require('./app/models')
const pool = require('./app/models/index')
const taxiRoute = require('./app/route/route')

let corsOption = {
    origin: 'http://localhost:4000/'
}


//parse request for content-type application/json

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from json server' })
})


app.use(taxiRoute)


// app.post('/api/taxi/create',(req,res) => {
//     console.log('taxiiiiiiiiiiiii')
// })

// app.use('/findAll',)

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and re-sync DB')
// })



app.listen(port, () => console.log('Server Work at server: ', port))
