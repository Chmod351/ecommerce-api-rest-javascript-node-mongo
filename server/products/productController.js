import { Router } from 'express';
import productActions from './productView.js';
const router = Router();

router.get('/products/:id', getProductById);
router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/tags/:tag', getProductsByTag);
router.get('/products/search/:query', searchProduct);
router.put('/products/view/:id', increaseViews);
router.put('/products/update/:id', updateProduct);
router.delete('/products/delete/:id', hideProduct);
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
  productActions
    .createProduct()
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function getProductsByTag(req, res, next) {
  productActions
    .getProductsByTag(req.params.tag)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function searchProduct(req, res, next) {
  productActions
    .searchProduct(req.query)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function increaseViews(req, res, next) {
  productActions
    .increaseViews(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function updateProduct(req, res, next) {
  productActions
    .updateProduct(req.body)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function hideProduct(req, res, next) {
  productActions
    .updateProduct(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
