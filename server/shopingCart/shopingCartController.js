import { Router } from 'express';
const router = Router();

router.put('/cart/:userId/add/:productId', addProduct);
router.delete('/cart/:userId/remove/:productId', removeProduct);
router.get('/cart/:userId', getUserCart);
router.get('/cart/:userId/total', getTotal);
export default router;
