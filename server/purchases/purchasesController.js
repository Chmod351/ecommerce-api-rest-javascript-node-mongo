import { Router } from 'express';
import purchaseActions from './purchasesView.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/purchase/:userId/purchases', authMiddleware, createPurchase);
router.get('/purchase/:userId/purchases', authMiddleware, getUserPurchases);
router.get('/purchase/', authMiddleware, adminCheck, getAllPurchases);
router.get('/purchases/:purchaseId', authMiddleware, getPurchaseById);
router.delete('/purchases/:purchaseId', authMiddleware, cancelPurchase);
router.put(
  '/purchases/:purchaseId/state',
  authMiddleware,
  adminCheck,
  updatePurchaseState,
);
export default router;

function createPurchase(req, res, next) {
  purchaseActions
    .createPurchase(
      req.user.id,
      req.body.productsId,
      req.body.purchaseDate,
      req.body.paymentMethod,
      req.body.shippingAddress,
    )
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getAllPurchases(req, res, next) {
  purchaseActions
    .getAllPurchases()
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getUserPurchases(req, res, next) {
  purchaseActions
    .getUserPurchases(req.user.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
function getPurchaseById(req, res, next) {
  purchaseActions
    .getPurchaseById(req.params.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
function cancelPurchase(req, res, next) {
  purchaseActions
    .cancelPurchase(req.body.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
function updatePurchaseState(req, res, next) {
  purchaseActions
    .updatePurchaseState(req.body.userId, req.body.shippingStatus)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
