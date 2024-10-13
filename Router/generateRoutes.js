const Router = require('express')
const router = new Router()
const allStudents = require(`../Controllers/generatedStudentsController`)

router.get('/generate', allStudents.getAllStudents)
router.get('/generate/limit', allStudents.getLimitStudents)
router.get('/generate/:id', allStudents.getCurrentStudent)

module.exports = router