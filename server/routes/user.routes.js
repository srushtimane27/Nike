import { Router } from "express";
import {register, login, validateToken, logout, addToCart, showCart, removeFromcart,addToWishList, showWishlist, removeFromWishlist} from "../controllers/user.controllers.js"


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validate-token', validateToken);
router.get('/logout', logout);
router.post('/add-to-cart', addToCart);
router.post('/show-cart', showCart);
router.post('/remove-cart', removeFromcart);
router.post('/add-to-wishList', addToWishList);
router.post('/show-wishlist', showWishlist);
router.post('/remove-from-wishlist', removeFromWishlist);

export default router;