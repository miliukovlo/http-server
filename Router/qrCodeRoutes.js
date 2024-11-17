const Router = require('express')
const router = new Router()
const qr = require('../Controllers/qrCodeController')

router.get('/qr', qr.getQr)

module.exports = router