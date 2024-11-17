const lessonsData = require('../Data/lessonsData')

class lessonsController {
    async getLesson(req,res) {
        try {
            const { subject } = req.body
            const lesson = lessonsData.find(lesson => lesson.subject_name === subject)
            if (lesson === null) {
                res.status(404).json({error: "Not Found"})
            }
                res.status(200).json(lesson)
        } catch (e) {
            res.status(500).json({error: "Server doesn`t work"})
        }
    }
}

module.exports = new lessonsController()