import cartActions from "../View/shopingCartView.js";

const cartControllers = {
  addProduct,
  removeProduct,
  getUserCart,
  getTotal,
};

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

export default cartControllers;