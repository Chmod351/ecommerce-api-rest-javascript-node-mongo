import cartService from './shopingCartService.js';
// function to check ownership
import isResourceOwner from '../helpers/isOwner.js';
import Cart from '../ShopingCart/shopinCartModel.js';

const cartController = {
  createCart,
  getUserCart,
  getAll,
  editCart,
  deleteCart,
};

function createCart(req, res, next) {
  cartService
    .createCart(req.body.products, req.user.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getAll(req, res, next) {
  cartService
    .getAll(req.query.page, req.query.size)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

async function getUserCart(req, res, next) {
  cartService
    .getUserCart(req.params.userId)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

async function editCart(req, res, next) {
  const isOwner = await isResourceOwner(Cart, req.params.cartId, req.user.id);
  if (isOwner) {
    cartService
      .editCart(req.body, req.params.cartId)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

async function deleteCart(req, res, next) {
  const isOwner = await isResourceOwner(Cart, req.params.cartId, req.user.id);
  if (isOwner) {
    cartService
      .deleteCart(req.params.cartId)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

export default cartController;
