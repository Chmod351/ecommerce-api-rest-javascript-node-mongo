import { Router } from 'express';
import purchaseController from '../Controllers/purchasesController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/purchase', authMiddleware, purchaseController.createPurchase);

router.get(
  '/purchase',
  authMiddleware,
  adminCheck,
  purchaseController.getAllPurchase
);

router.get(
  '/purchase/:userId',
  authMiddleware,
  purchaseController.getUserPurchase
);

router.delete(
  '/purchase/:purchaseId',
  authMiddleware,
  purchaseController.cleanPurchase
);

router.put(
  '/purchase/:purchaseId',
  authMiddleware,
  adminCheck,
  purchaseController.updatePurchaseState
);

router.get(
  '/purchase/monthly',
  authMiddleware,
  adminCheck,
  purchaseController.getMonthly
);

router.post('/purchase/payment', authMiddleware, purchaseController.payment);
router.post('/purchase/order', authMiddleware, purchaseController.createPurchase);
export default router;
