import { Router } from 'express';
import productActions from './productView.js';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.get('/products', getProducts);
router.get('/products/tags', getProductsByTag);
router.get('/products/search', cleanBody, searchProduct);
router.get('/products/getById/:id', getProductById);
router.post('/products', authMiddleware, cleanBody, adminCheck, createProduct);
router.put(
  '/products/update/:id',
  authMiddleware,
  cleanBody,
  adminCheck,
  updateProduct,
);
router.delete('/products/delete/:id', authMiddleware, adminCheck, hideProduct);

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

async function getProductsByTag(req, res, next) {
  console.log('ad');
  const category = req.query.tag.split(',');
  productActions
    .getProductsByTag(category)
    .then((products) => res.json(products))
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

export default router;
