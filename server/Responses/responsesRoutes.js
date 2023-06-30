import responseControllers from './responsesController.js';
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

router.put(
  '/delete/:responsesId',
  authMiddleware,
  responseControllers.hideResponse,
);

router.get('/getAll', authMiddleware, responseControllers.getAllResponse);

export default router;
