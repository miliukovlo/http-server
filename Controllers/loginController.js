const loginData = require('../Data/loginData')

class loginController {
    async getAccount(req,res) {
        try {
            const { email } = req.body
            console.log(email)
            console.log(loginData)
            const account = loginData.find(acc => acc.email === email)
            console.log(account)
            res.status(200).json({account: account})
        } catch (e) {
            res.status(500).json({error: "Account not found"})
        }
    }
}

module.exports = new loginController()