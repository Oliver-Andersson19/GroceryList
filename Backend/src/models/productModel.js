import connection from "../db/database.js";


async function getProductsList(userId) {
    const [products] = await connection.execute("SELECT * FROM product WHERE account_id = ?", [userId]);
    return products;
}

async function addProduct(amount, title, userId) {
    const [result] = await connection.execute("INSERT INTO product (amount, title, account_id) VALUES (?,?,?)", [amount, title, userId]);
    return result
}

async function deleteProduct(userId, productId) {
    const [result] = await connection.execute("DELETE FROM product WHERE id = ? AND account_id = ?", [productId, userId]);
    return result;
}


export default { getProductsList, addProduct, deleteProduct };
