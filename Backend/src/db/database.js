import mysql2 from "mysql2/promise";
import "dotenv/config";

const connection = await mysql2.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "grocerylist",
  multipleStatements: true,
  timezone: "+00:00",
});
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection to database established");
  }
});

export default connection;
