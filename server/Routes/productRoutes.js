import { Router } from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import productController from '../Controllers/productController.js';

const router = Router();

router.get('/product', productController.getProduct);

router.get('/product/tag', productController.getProductByTag);

router.get('/product/search', cleanBody, productController.searchProduct);

router.get('/product/:id', productController.getProductById);

router.post(
  '/product',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.createProduct,
);

router.put(
  '/product/update/:id',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.updateProduct,
);

router.put(
  '/product/hide/:id',
  authMiddleware,
  adminCheck,
  productController.hideProduct,
);

export default router;
