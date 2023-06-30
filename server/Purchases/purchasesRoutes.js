import { Router } from 'express';
import purchaseController from './purchasesController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/create', authMiddleware, purchaseController.createPurchase);

router.get(
  '/getAll',
  authMiddleware,
  adminCheck,
  purchaseController.getAllPurchase,
);

router.get(
  '/:userId',
  authMiddleware,
  purchaseController.getUserPurchase,
);

router.delete(
  '/:id',
  authMiddleware,
  purchaseController.cleanPurchase,
);

router.put(
  '/status/:id',
  authMiddleware,
  adminCheck,
  purchaseController.updatePurchaseState,
);

router.get(
  '/monthly',
  authMiddleware,
  adminCheck,
  purchaseController.getMonthly,
);

router.post('/payment', authMiddleware, purchaseController.payment);

export default router;
