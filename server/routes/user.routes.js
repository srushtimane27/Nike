import { Router } from "express";
import {register, login, validateToken, logout} from "../controllers/user.controllers.js"

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validate-token', validateToken);
router.get('/logout', logout);

export default router;