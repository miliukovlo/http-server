const coupleData = require('../Data/CoupleData')

class CoupleController {
    async getCouple(req,res) {
        try {
            res.status(200).json(coupleData)
        } catch (e) {
            res.status(500).json({error: "Server doesn`t work"})
        }
    }
    async getCurrentCouple(req,res) {
        try {
            const {id} = req.body
            const currentCouple = coupleData.find((lesson) => lesson.id === Number(id))
            res.status(200).json(currentCouple)
        } catch (e) {
            res.status(500).json({error: "Server doesn`t work"})
        }
    }
}

module.exports = new CoupleController()