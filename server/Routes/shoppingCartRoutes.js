import { Router } from "express";
import cartControllers from "../Controllers/shopingCartController.js";
import authMiddleware from "../helpers/jwt.js";

const router = Router();

router.put(
  "/cart/:userId/add/:productId",
  authMiddleware,
  cartControllers.addProduct
);

router.delete(
  "/cart/:userId/remove/:productId",
  authMiddleware,
  cartControllers.removeProduct
);

router.get("/cart/:userId/total", 
authMiddleware, 
cartControllers.getTotal
);

router.get("/cart/:userId",
 authMiddleware, 
cartControllers.getUserCart
);

export default router;
