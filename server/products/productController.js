import { Router } from 'express';
import productActions from './productView.js';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.get('/products/:id', getProductById);
router.get('/products', getProducts);
router.post('/products', authMiddleware, cleanBody, adminCheck, createProduct);
router.get('/products/tags/:tag', getProductsByTag);
router.get('/products/search/:query', cleanBody, searchProduct);
router.put(
  '/products/update/:id',
  authMiddleware,
  cleanBody,
  adminCheck,
  updateProduct,
);
router.delete('/products/delete/:id', authMiddleware, adminCheck, hideProduct);

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
  if (!req.user.isAdmin) {
    res.status(403);
  }
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
  if (!req.user.isAdmin) {
    res.status(403);
  }

  productActions
    .updateProduct(
      req.params.id,
      req.body.imgUrl,
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
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
