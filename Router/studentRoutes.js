const Router = require('express')
const router = new Router()
const Students = require(`../Controllers/studentsController`)

router.get('/students', Students.getStudents)
router.put('/students/:id', Students.updateStudent)

module.exports = router