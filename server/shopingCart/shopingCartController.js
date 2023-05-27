import { Router } from 'express';
import cartActions from './shopingCartView.js';
import authMiddleware from '../helpers/jwt.js';

const router = Router();

router.put('/cart/:userId/add/:productId',authMiddleware, addProduct);
router.delete('/cart/:userId/remove/:productId',authMiddleware, removeProduct);
router.get('/cart/:userId/total',authMiddleware, getTotal);
router.get('/cart/:userId',authMiddleware, getUserCart);
export default router;


function addProduct(req, res, next) {
  cartActions
    .addProduct(req.body.id, req.user.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function removeProduct(req, res, next) {
  cartActions
    .removeProduct(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function getUserCart(req, res, next) {
  cartActions
    .getUserCart(req.user.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
function getTotal(req, res, next) {
  cartActions
    .getTotal(req.body.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}
