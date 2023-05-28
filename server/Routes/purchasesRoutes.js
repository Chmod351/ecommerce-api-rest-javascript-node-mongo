import { Router } from "express";
import purchaseController from "../Controllers/purchasesController.js";
import authMiddleware from "../helpers/jwt.js";
import adminCheck from "../helpers/adminCheck.js";
const router = Router();

router.post(
  "/purchase/:userId/purchases",
  authMiddleware,
  purchaseController.createPurchase
);
router.get(
  "/purchase/:userId/purchases",
  authMiddleware,
  purchaseController.getUserPurchases
);
router.get(
  "/purchase/",
  authMiddleware,
  adminCheck,
  purchaseController.getAllPurchases
);
router.delete(
  "/purchase/:purchaseId",
  authMiddleware,
  purchaseController.cleanPurchase
);
router.put(
  "/purchase/:purchaseId/state",
  authMiddleware,
  adminCheck,
  purchaseController.updatePurchaseState
);
router.get(
  "/purchase/monthly",
  authMiddleware,
  adminCheck,
  purchaseController.getMonthly
);

export default router;
