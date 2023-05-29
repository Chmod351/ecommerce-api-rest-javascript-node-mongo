import cartActions from '../View/shopingCartView.js';

const cartControllers = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

function createCart(req, res, next) {
  cartActions
    .createCart(req.body)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function editCart(req, res, next) {
  cartActions
    .editCart(req.body, req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function deleteCart(req, res, next) {
  cartActions
    .deleteCart(req.params.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getUserCart(req, res, next) {
  cartActions
    .getUserCart(req.params.userId)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getAll(req, res, next) {
  cartActions
    .getAll()
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

export default cartControllers;

