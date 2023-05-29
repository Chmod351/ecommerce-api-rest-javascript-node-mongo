import { Router } from 'express';
import cartControllers from '../Controllers/shopingCartController.js';
import authMiddleware from '../helpers/jwt.js';
import cleanBody from '../helpers/sanitizer.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/cart', authMiddleware, cleanBody, cartControllers.createCart);

router.get('/cart/all', authMiddleware, adminCheck, cartControllers.getAll);

router.delete('/cart/:cartId', authMiddleware, cartControllers.deleteCart);

router.get('/cart/:userId', authMiddleware, cartControllers.getUserCart);

router.put(
  '/cart/:cartId',
  authMiddleware,
  cleanBody,
  cartControllers.editCart,
);

export default router;
