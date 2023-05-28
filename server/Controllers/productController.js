import productActions from '../View/productView.js'

const producTController={
  getProductById,
  getProducts,
  getProductsByTag,
  createProduct,
  searchProduct,
  updateProduct,
  hideProduct
}

function getProductById(req, res, next) {
  productActions
    .getProductById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function getProducts(req, res, next) {
  productActions
    .getProducts()
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function getProductsByTag(req, res, next) {
  const category = req.query.tag.split(',');
  productActions
    .getProductsByTag(category)
    .then((products) => res.json(products))
    .catch((error) => next(error));
}

function createProduct(req, res, next) {
  productActions
    .createProduct(
      req.body.name,
      req.body.imgUrl,
      req.body.price,
      req.body.description,
      req.body.tags,
      req.body.hot,
    )
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function searchProduct(req, res, next) {
  const query = req.query.q;
  productActions
    .searchProduct(query)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function updateProduct(req, res, next) {
  productActions
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
  productActions
    .updateProduct(req.params.id)
    .then(() =>
      res.json({ message: `product with id ${req.params.id} was hidden` }),
    )
    .catch((error) => next(error));
}


export default producTController
