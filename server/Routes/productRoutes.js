import { Router } from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import productController from '../Controllers/productController.js';
import {caching} from '../helpers/cache.js'
const router = Router();

router.get('/product',caching("1 minutes"), productController.getProduct);

router.get('/product/tag',caching("1 minutes"), productController.getProductByTag);

router.get('/product/search',caching("1 minutes"), cleanBody, productController.searchProduct);

router.get('/product/:id',caching("1 minutes"), productController.getProductById);

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
