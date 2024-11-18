const loginData = require('../Data/loginData');

class LoginController {
    async getAccount(req, res) {
        try {
            console.log(req.body);
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(401).json({ error: "Login&password is undefined" });
            }

            const account = loginData.find(acc => acc.email === email);
            if (!account) {
                return res.status(404).json({ error: "NotFound" });
            }

            if (account.password === password) {
                return res.status(200).json(account);
            } else {
                return res.status(401).json({ error: "Unauthorized" });
            }
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: "Account not found" });
        }
    }
}

module.exports = new LoginController();
