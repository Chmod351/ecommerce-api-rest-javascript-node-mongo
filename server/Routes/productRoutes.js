import { Router } from "express";
import cleanBody from "../helpers/sanitizer.js";
import authMiddleware from "../helpers/jwt.js";
import adminCheck from "../helpers/adminCheck.js";
import productController from "../Controllers/productController.js";

const router = Router();

router.get(
  "/products", 
productController.getProducts
);

router.get(
  "/products/tags", 
productController.getProductsByTag
);

router.get(
  "/products/search", 
cleanBody, 
productController.searchProduct
);

router.get(
  "/products/:id", 
productController.getProductById
);

router.put(
  "/products",
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.createProduct
);
router.put(
  "/products/update/:id",
  authMiddleware,
  cleanBody,
  adminCheck,
  productController.updateProduct
);
router.put(
  "/products/hide/:id",
  authMiddleware,
  adminCheck,
  productController.hideProduct
);

export default router;
