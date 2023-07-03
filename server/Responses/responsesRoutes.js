import responseControllers from './responsesController.js';
import express from 'express';
import { cleanBody } from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();
router.get('/getAll', authMiddleware, responseControllers.getAllResponse);
router.post(
  '/create/:commentId',
  authMiddleware,
  cleanBody,
  responseControllers.createResponse,
);

router.put(
  '/hide/:responsesId',
  authMiddleware,
  responseControllers.hideResponse,
);



export default router;
