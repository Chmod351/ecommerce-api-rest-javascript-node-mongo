import { Router } from 'express';
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
  userActions
    .signUp(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function getProducts(req, res, next) {
  userActions
    .signUp()
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function createProduct(req, res, next) {
  userActions
    .signUp()
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function getProductsByTag(req, res, next) {
  userActions
    .signUp(req.params.tag)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function searchProduct(req, res, next) {
  userActions
    .signUp(req.query)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function increaseViews(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function updateProduct(req, res, next) {
  userActions
    .signUp(req.body)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
function hideProduct(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
