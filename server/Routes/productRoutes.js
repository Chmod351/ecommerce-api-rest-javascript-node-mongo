import { Router } from 'express';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import productController from '../Controllers/productController.js';
import { caching } from '../helpers/cache.js';
import { cleanBody, validateQuery } from '../helpers/sanitizer.js';
const router = Router();

router.get('/product', caching('10 minutes'), productController.getProduct);

router.get(
  '/product/tag',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.getProductByTag,
);

router.get(
  '/product/search',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.searchProduct,
);

router.get(
  '/product/:id',
  caching('10 minutes'),
  productController.getProductById,
);

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
  cleanBody,
  productController.hideProduct,
);

export default router;
