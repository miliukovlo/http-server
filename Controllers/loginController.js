const loginData = require('../Data/loginData')

class loginController {
    async getAccount(req,res) {
        try {
            const { email, password } = req.body
            const account = loginData.find(acc => acc.email === email)
            if (account.password === password) {
                res.status(200).json({account: account})
            }
                res.status(401).json({error: "Unauthorized"})
            console.log(account)
        } catch (e) {
            res.status(500).json({error: "Account not found"})
        }
    }
}

module.exports = new loginController()