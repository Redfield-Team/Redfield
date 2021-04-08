const express = require('express');
const router = express.Router();
const Demand = require('../controllers/DemandController')

router.post('/create', Demand.createDemand)
router.get('/all', Demand.getAllDemand)
router.get('/userDemand', Demand.getUserDemand)

module.exports = router ;