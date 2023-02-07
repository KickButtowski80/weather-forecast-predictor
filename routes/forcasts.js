const express = require('express')
const router = express.Router()
const {
    currentLocForcast,
    specificLocForcast
} = require('../controllers/forcasts')

router.route('/current-loc').get(currentLocForcast)
router.route('/specific-loc').get(specificLocForcast)

module.exports = router
