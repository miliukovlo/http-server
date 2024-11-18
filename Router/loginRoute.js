const Router = require('express')
const router = new Router()
const accounts = require('../Controllers/loginController')

router.post('/account', accounts.getAccount)

module.exports = router