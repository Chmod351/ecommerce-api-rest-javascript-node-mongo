import responseControllers from '../Controllers/responsesController.js';
import express from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/responses/create',
  authMiddleware,
  cleanBody,
  responseControllers.createResponse,
);
router.delete(
  '/responses/delete',
  authMiddleware,
  responseControllers.deleteResponse,
);
router.get(
  '/responses/getAll',
  authMiddleware,
  responseControllers.getAllResponse,
);

export default router;
