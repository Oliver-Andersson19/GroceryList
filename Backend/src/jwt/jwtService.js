import jwt from 'jsonwebtoken'
import accountModel from '../models/accountModel.js'


export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(403).json({ error: "Bad token" });

    jwt.verify(token, "SECRET", async (err, username) => {
        if (err) return res.status(403).json({ error: "Bad token" });

        const account = await accountModel.getAccount(username)
        if (!account[0]) return res.status(404).json({ error: "Account does not exist" });
        
        req.userId = account[0].id;
        next()
    })
}


export function createToken(data) {
    return jwt.sign(data, "SECRET");
}

export default { authenticateToken, createToken }