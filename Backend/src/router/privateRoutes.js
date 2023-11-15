import { Router } from "express";
import productController from "../controllers/productController.js";

const privateRoutes = Router();


privateRoutes.get("/products", productController.getProducts);
privateRoutes.delete("/products/:productId", productController.deleteProduct);



export default privateRoutes;