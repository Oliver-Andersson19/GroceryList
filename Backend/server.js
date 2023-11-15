import Express from "express";
import connection from "./src/db/database.js";
import privateRoutes from "./src/router/privateRoutes.js";
import authRoutes from "./src/router/authRoutes.js";
import jwtService from "./src/jwt/jwtService.js";


const app = Express();
const port = 3050;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use("/api", jwtService.authenticateToken, privateRoutes);
app.use("/auth", authRoutes);

app.listen(port);
