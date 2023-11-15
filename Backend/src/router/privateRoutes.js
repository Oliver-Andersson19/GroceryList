import { Router } from "express";
import productController from "../controllers/productController.js";

const privateRoutes = Router();


privateRoutes.get("/list", productController.getProducts);


export default privateRoutes;