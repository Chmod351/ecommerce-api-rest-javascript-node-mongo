import { Router } from 'express';
const router = Router();

router.put('/cart/:userId/add/:productId', addProduct);
router.delete('/cart/:userId/remove/:productId', removeProduct);
router.get('/cart/:userId', getUserCart);
router.get('/cart/:userId/total', getTotal);
export default router;

function addProduct(req, res, next) {
  userActions
    .signUp(req.body.id, req.user.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function removeProduct(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function getUserCart(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function getTotal(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
