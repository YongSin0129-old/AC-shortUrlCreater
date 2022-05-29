const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const finished = require('./modules/finished')

router.use('/', home)
router.use('/finished', finished)

module.exports = router
