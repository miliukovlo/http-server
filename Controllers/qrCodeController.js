const QRCodeData = require('../Data/QRCode')

class qrCodeController {
    async getQr(req,res) {
        try {
            res.status(200).json(QRCodeData[0])
        } catch (e) {
            res.status(500).json({error: "Server doesn`t work"})
        }
    }
}

module.exports = new qrCodeController()