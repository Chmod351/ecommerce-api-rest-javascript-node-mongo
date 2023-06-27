import { Router } from 'express';
import cartController from '../Controllers/shopingCartController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import { cleanBody } from '../helpers/sanitizer.js';
const router = Router();

router.post('/carts/create', authMiddleware, cleanBody, cartController.createCart);

router.get('/carts/getAll', authMiddleware, adminCheck, cartController.getAll);

router.get('/carts/:userId', authMiddleware, cartController.getUserCart);

router.put('/carts/:cartId', authMiddleware, cleanBody, cartController.editCart);

router.delete('/carts/:cartId', authMiddleware, cartController.deleteCart);

export default router;
