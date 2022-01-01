const express = require('express')
const app = express()
const router = express.Router()
const TaxiC = require('../controllers/taxiController')
const customerC = require('../controllers/customerController')
const stationC = require('../controllers/stationController')
const taxiDriverC = require('../controllers/taxiDreiversC')

/* ******** routes of taxi ************* */
router.post('/api/taxi/create',TaxiC.create)
router.get('/api/taxi/findAll',TaxiC.findAll)
router.get('/api/taxi/findOne/:plate',TaxiC.findOne)
router.put('/api/taxi/update/:plate',TaxiC.update)
router.delete('/api/taxi/delete/:plate',TaxiC.delete)
router.get('/api/taxi/finWithOutPlate/:plate',TaxiC.findWithOutPlate)
router.get('/api/taxi/taxi-driver-info',TaxiC.allDriversData)

/* *********** routes of customer ************** */
router.post('/api/customer/create',customerC.create)
router.get('/api/customer/findAll',customerC.findAll)
router.get('/api/customer/findOne/:cid',customerC.findOne)
router.put('/api/customer/update/:cid',customerC.update)
router.delete('/api/customer/delete/:cid',customerC.delete)

/* ********** routes of staions ********* */
router.post('/api/station/create',stationC.create)
router.get('/api/station/findAll',stationC.findAll)
router.get('/api/station/findOne/:snumber',stationC.findOne)
router.put('/api/station/update/:snumber',stationC.update)
router.delete('/api/station/delete/:snumber',stationC.delete)

/* ********* routes of taxi drivers ********* */
router.post('/api/taxi-driver/create',taxiDriverC.create)
router.get('/api/taxi-driver/findAll',taxiDriverC.findAll)
router.get('/api/taxi-driver/findOne/:id',taxiDriverC.findOne)
router.put('/api/taxi-driver/update/:id',taxiDriverC.update)
router.delete('/api/taxi-driver/delete/:id',taxiDriverC.delete)

/* ***********routs for models ********** */
router.get('/api/model/show',stationC.showModels)
router.get('/api/model/showDrivers',stationC.countDrivers)
router.get('/api/model/showDriversOneStation/:snumber',stationC.countDriversOneStation)

module.exports = router;