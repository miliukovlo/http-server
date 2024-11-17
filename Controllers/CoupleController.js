const coupleData = require('../Data/CoupleData')

class CoupleController {
    async getCouple(req,res) {
        try {
                res.status(200).json(coupleData)
        } catch (e) {
            res.status(500).json({error: "Server doesn`t work"})
        }
    }
}

module.exports = new CoupleController()