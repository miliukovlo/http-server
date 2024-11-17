const Router = require('express')
const router = new Router()
const couple = require('../Controllers/CoupleController')

router.get('/couple', couple.getCouple)

module.exports = router