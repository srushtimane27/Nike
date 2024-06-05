import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/product.controllers.js";

const router = Router();

router.post('/add-product', addProduct);
router.get('/get-all-products', getAllProducts);

export default router;