import { Router } from 'express';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import productController from '../Controllers/productController.js';
import { caching } from '../helpers/cache.js';
import { cleanBody, validateQuery } from '../helpers/sanitizer.js';
const router = Router();

router.get('/products', caching('10 minutes'), productController.getProduct);

router.get(
  '/products/tag',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.getProductByTag,
);

router.get(
  '/products/search',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.searchProduct,
);

router.get(
  '/products/:id',
  caching('10 minutes'),
  productController.getProductById,
);

router.post(
  '/products/create',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.createProduct,
);

router.put(
  '/products/update/:id',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.updateProduct,
);

router.delete(
  '/products/delete/:id',
  authMiddleware,
  adminCheck,
  cleanBody,
  productController.deleteProduct,
);

export default router;
