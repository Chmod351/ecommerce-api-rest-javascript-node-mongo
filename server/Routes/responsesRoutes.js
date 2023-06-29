import responseControllers from '../Controllers/responsesController.js';
import express from 'express';
import { cleanBody } from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/create/:commentId',
  authMiddleware,
  cleanBody,
  responseControllers.createResponse,
);

router.delete(
  '/delete/:responsesId',
  authMiddleware,
  responseControllers.deleteResponse,
);

router.get('/getAll', authMiddleware, responseControllers.getAllResponse);

export default router;
