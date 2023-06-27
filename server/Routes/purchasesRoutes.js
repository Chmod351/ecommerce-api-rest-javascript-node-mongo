import { Router } from 'express';
import purchaseController from '../Controllers/purchasesController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/purchase', authMiddleware, purchaseController.createPurchase);

router.get(
  '/purchases/getAll',
  authMiddleware,
  adminCheck,
  purchaseController.getAllPurchase,
);

router.get(
  '/purchases/:userId',
  authMiddleware,
  purchaseController.getUserPurchase,
);

router.delete(
  '/purchases/:purchaseId',
  authMiddleware,
  purchaseController.cleanPurchase,
);

router.put(
  '/purchases/:purchaseId',
  authMiddleware,
  adminCheck,
  purchaseController.updatePurchaseState,
);

router.get(
  '/purchases/monthly',
  authMiddleware,
  adminCheck,
  purchaseController.getMonthly,
);

router.post('/purchases/payment', authMiddleware, purchaseController.payment);
router.post(
  '/purchases/order',
  authMiddleware,
  purchaseController.createPurchase,
);
export default router;
