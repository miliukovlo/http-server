const Router = require("express");
const router = new Router();
const allStudents = require(`../Controllers/generatedStudentsController`);

router.get("/generate", allStudents.getAllStudents);
router.get("/generate/limit/:limit", allStudents.getLimitStudents);
router.get("/generate/current/:id", allStudents.getCurrentStudent);
router.get(
	"/generate/students/page=:page/limit=:limit",
	allStudents.getStudentsByPage
);

module.exports = router;
