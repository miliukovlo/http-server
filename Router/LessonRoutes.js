const Router = require('express')
const router = new Router()
const lessons = require('../Controllers/lessonsController')

router.get('/lesson', lessons.getLesson)

module.exports = router