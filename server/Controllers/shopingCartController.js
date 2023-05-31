import cartService from '../View/shopingCartView.js';
import isResourceOwner from '../helpers/isOwner.js';
import Cart from '../Models/shopinCartModel.js';

const cartController = {
  createCart,
  getUserCart,
  getAll,
  editCart,
  deleteCart,
};

function createCart(req, res, next) {
  if (
    !req.body.products ||
    !Array.isArray(req.body.products) ||
    req.body.products.length === 0
  ) {
    return res
      .status(400)
      .json({ message: 'Missing or invalid products field' });
  }

  const hasInvalidProduct = req.body.products.some(
    (product) => !product.productId || !product.quantity,
  );

  if (hasInvalidProduct) {
    return res
      .status(400)
      .json({ message: 'Missing required field in one of the products' });
  }

  cartService
    .createCart(req.body, req.user.id)
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getAll(req, res, next) {
  cartService
    .getAll()
    .then((cart) => res.json(cart))
    .catch((error) => next(error));
}

function getUserCart(req, res, next) {
  const isOwner = isResourceOwner(Cart, req.params.userId, req.user.id);
  if (isOwner === true) {
    cartService
      .getUserCart(req.params.userId)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

function editCart(req, res, next) {
  const isOwner = isResourceOwner(Cart, req.params.cartId, req.params.userId);
  if (isOwner === true) {
    cartService
      .editCart(req.body, req.params.cartId)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

function deleteCart(req, res, next) {
  const isOwner = isResourceOwner(Cart, req.params.cartId, req.params.userId);
  if (isOwner === true) {
    cartService
      .deleteCart(req.params.cartId)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

export default cartController;
