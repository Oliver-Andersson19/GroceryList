import jwtService from "../jwt/jwtService.js";
import accountModel from "../models/accountModel.js";


async function registerUser(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const account = await accountModel.getAccount(username)

        if (account[0]) return res.status(400).json({ error: "Account already exists" });        
        await accountModel.createAccount(username, password);

        const token = jwtService.createToken(username)

        res.status(200).json(token)

    } catch(error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function login(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const account = await accountModel.getAccount(username)

        if (!account[0]) return res.status(404).json({ error: "Account does not exist" });        
        if (account[0].password !== password) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwtService.createToken(account[0].username)

        res.status(200).json(token)

    } catch(error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default { login, registerUser };
