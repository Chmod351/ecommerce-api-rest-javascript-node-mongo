import { Router } from 'express';
const router = Router();

router.post('/users/:userId/purchases', createPurchase);
router.get('/users/:userId/purchases', getUserPurchases);
router.get('/purchases/:purchaseId', getPurchaseById);
router.delete('/purchases/:purchaseId', cancelPurchase);
router.put('/purchases/:purchaseId/state', updatePurchaseState);

