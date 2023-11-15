import connection from "../db/database.js";


async function getAccount(username) {
    const [account] = await connection.execute("SELECT * FROM account WHERE username = ?", [username]);
    return account;
}

async function createAccount(username, password) {
    const [result] = await connection.execute("INSERT INTO account (username, password) VALUES (?, ?)", [username, password]);
    return result;
}

export default { getAccount, createAccount };
