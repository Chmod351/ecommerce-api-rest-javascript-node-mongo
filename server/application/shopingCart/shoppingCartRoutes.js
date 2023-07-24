import { Router } from 'express';
import cartController from './shopingCartController.js';
import authMiddleware from '../../helpers/jwt.js';
import adminCheck from '../../helpers/adminCheck.js';
import { cleanBody } from '../../helpers/sanitizer.js';
const router = Router();

router.post('/create', authMiddleware, cleanBody, cartController.createCart);

router.get('/getAll', authMiddleware, adminCheck, cartController.getAll);

router.get('/:userId', authMiddleware, cartController.getUserCart);

router.put('/update/:cartId', authMiddleware, cleanBody, cartController.editCart);

router.delete('/delete/:cartId', authMiddleware, cartController.deleteCart);

export default router;
