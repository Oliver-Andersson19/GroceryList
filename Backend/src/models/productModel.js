import connection from "../db/database.js";


async function getProductsList(userId) {
    const [products] = await connection.execute("SELECT * FROM product WHERE account_id = ?", [userId]);
    return products;
}


export default { getProductsList };
