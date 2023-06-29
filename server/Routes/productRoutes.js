import { Router } from 'express';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import productController from '../Controllers/productController.js';
import { caching } from '../helpers/cache.js';
import { cleanBody, validateQuery } from '../helpers/sanitizer.js';
const router = Router();

router.get('/', caching('10 minutes'), productController.getProduct);

router.get(
  '/tag',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.getProductByTag,
);

router.get(
  '/search',
  caching('10 minutes'),
  cleanBody,
  validateQuery,
  productController.searchProduct,
);

router.get('/:id', caching('10 minutes'), productController.getProductById);

router.post(
  '/create',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.createProduct,
);

router.put(
  '/update/:id',
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.updateProduct,
);

router.delete(
  '/delete/:id',
  authMiddleware,
  adminCheck,
  cleanBody,
  productController.deleteProduct,
);

export default router;
