import cartService from '../View/shopingCartView.js';

const cartController = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

function createCart(req, res, next) {
  cartService
    .createCart(req.body)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function editCart(req, res, next) {
  cartService
    .editCart(req.body, req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function deleteCart(req, res, next) {
  cartService
    .deleteCart(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getUserCart(req, res, next) {
  cartService
    .getUserCart(req.params.userId)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getAll(req, res, next) {
  cartService
    .getAll()
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

export default cartController;

