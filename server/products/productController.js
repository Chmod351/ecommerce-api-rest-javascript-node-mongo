import { Router } from 'express';
import productActions from './productView.js';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = Router();

router.get('/products/:id', getProductById);
router.get('/products', getProducts);
router.post('/products', authMiddleware, cleanBody, createProduct);
router.get('/products/tags/:tag', getProductsByTag);
router.get('/products/search/:query', cleanBody, searchProduct);
router.put('/products/update/:id', authMiddleware, cleanBody, updateProduct);
router.delete('/products/delete/:id', authMiddleware, hideProduct);

export default router;

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

function createProduct(req, res, next) {
  console.log(req.user);
  productActions
    .createProduct(
      req.user.id,
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

function getProductsByTag(req, res, next) {
  const tags = req.query.tags.split(',');
  productActions
    .getProductsByTag(tags)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function searchProduct(req, res, next) {
  productActions
    .searchProduct(req.query.q)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function updateProduct(req, res, next) {
  productActions
    .updateProduct(
      req.params.id,
      req.body.imgUrl,
      req.body.price,
      req.body.hot,
      req.body.description,
      req.user.id,
    )
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function hideProduct(req, res, next) {
  productActions
    .updateProduct(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
