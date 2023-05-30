import cartService from '../View/shopingCartView.js';

const cartController = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
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

function editCart(req, res, next) {
  if (req.user.id === req.body.userId) {
    cartService
      .editCart(req.body, req.params.id)
      .then((cart) => res.json(cart))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
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
