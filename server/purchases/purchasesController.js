import { Router } from 'express';
const router = Router();

router.post('/users/:userId/purchases', createPurchase);
router.get('/users/:userId/purchases', getUserPurchases);
router.get('/purchases/:purchaseId', getPurchaseById);
router.delete('/purchases/:purchaseId', cancelPurchase);
router.put('/purchases/:purchaseId/state', updatePurchaseState);
export default router;

function createPurchase(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function getUserPurchases(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function getPurchaseById(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function cancelPurchase(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function updatePurchaseState(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
