import { Router } from 'express';
import purchaseController from '../Controllers/purchasesController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/purchases/create', authMiddleware, purchaseController.createPurchase);

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
router.post(
  '/order',
  authMiddleware,
  purchaseController.createPurchase,
);
export default router;
