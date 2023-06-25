import productService from '../View/productView.js';

const productController = {
  getProductById,
  getProduct,
  getProductByTag,
  createProduct,
  searchProduct,
  updateProduct,
  hideProduct,
};

function getProductById(req, res, next) {
  productService
    .getProductById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function getProduct(req, res, next) {
  productService
    .getProduct(req.query.page, req.query.size)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function getProductByTag(req, res, next) {
  const category = req.query.tag.split(',');
  productService
    .getProductByTag(category, req.query.page, req.query.size)
    .then((products) => res.json(products))
    .catch((error) => next(error));
}

function createProduct(req, res, next) {
  productService
    .createProduct(
      req.body.name,
      req.body.imgUrl,
      req.body.price,
      req.body.description,
      req.body.tags,
      req.body.color,
      req.body.size,
      req.body.hot,
    )
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function searchProduct(req, res, next) {
  const query = req.query.q;
  productService
    .searchProduct(query)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function updateProduct(req, res, next) {
  productService
    .updateProduct(
      req.params.id,
      req.body.price,
      req.body.hot,
      req.body.description,
    )
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function hideProduct(req, res, next) {
  productService
    .updateProduct(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

export default productController;
