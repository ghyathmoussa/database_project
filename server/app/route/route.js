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
router.post('/api/taxi/findOne',TaxiC.findOne)
router.put('/api/taxi/update',TaxiC.update)
router.delete('/api/taxi/delete',TaxiC.delete)
router.post('/api/taxi/finWithOutPlate',TaxiC.findWithOutPlate)
router.get('/api/taxi/taxi-driver-info',TaxiC.allDriversData)

/* *********** routes of customer ************** */
router.post('/api/customer/create',customerC.create)
router.get('/api/customer/findAll',customerC.findAll)
router.post('/api/customer/findOne',customerC.findOne)
router.put('/api/customer/update',customerC.update)
router.delete('/api/customer/delete',customerC.delete)

/* ********** routes of staions ********* */
router.post('/api/station/create',stationC.create)
router.get('/api/station/findAll',stationC.findAll)
router.post('/api/station/findOne',stationC.findOne)
router.put('/api/station/update',stationC.update)
router.delete('/api/station/delete',stationC.delete)

/* ********* routes of taxi drivers ********* */
router.post('/api/taxi-driver/create',taxiDriverC.create)
router.get('/api/taxi-driver/findAll',taxiDriverC.findAll)
router.post('/api/taxi-driver/findOne',taxiDriverC.findOne)
router.put('/api/taxi-driver/update',taxiDriverC.update)
router.delete('/api/taxi-driver/delete',taxiDriverC.delete)

/* ***********routs for models ********** */
router.post('/api/model/show',stationC.showModels)
router.get('/api/model/showDrivers',stationC.countDrivers)
router.post('/api/model/showDriversOneStation',stationC.countDriversOneStation)

module.exports = router;