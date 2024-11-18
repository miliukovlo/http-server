const Router = require('express')
const router = new Router()
const couple = require('../Controllers/CoupleController')

router.get('/couple', couple.getCouple)
router.post('/couple', couple.getCurrentCouple)

module.exports = router