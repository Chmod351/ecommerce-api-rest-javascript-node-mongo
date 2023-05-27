import { Router } from 'express';
import purchaseActions from '../View/purchasesView.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/purchase/:userId/purchases', authMiddleware, createPurchase);
router.get('/purchase/:userId/purchases', authMiddleware, getUserPurchases);
router.get('/purchase/', authMiddleware, adminCheck, getAllPurchases);
router.delete('/purchase/:purchaseId', authMiddleware, cleanPurchase);
router.put(
  '/purchase/:purchaseId/state',
  authMiddleware,
  adminCheck,
  updatePurchaseState,
);
router.get('/purchase/monthly', authMiddleware, adminCheck, getMonthly);

export default router;

function createPurchase(req, res, next) {
  purchaseActions
    .createPurchase(
      req.user.id,
      req.body.products,
      req.body.amount,
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

function getMonthly(req, res, next) {
  purchaseActions
    .getMonthly()
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function cleanPurchase(req, res, next) {
  purchaseActions
    .cleanPurchase(req.body.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
function updatePurchaseState(req, res, next) {
  purchaseActions
    .updatePurchaseState(req.params.id, req.body.shippingStatus)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}
