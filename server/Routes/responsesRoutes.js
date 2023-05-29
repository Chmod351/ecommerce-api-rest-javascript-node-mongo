import responseControllers from '../Controllers/responsesController.js';
import express from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/responses',
  authMiddleware,
  cleanBody,
  responseControllers.createResponse,
);
router.delete('/responses', authMiddleware, responseControllers.deleteResponse);
router.get('/responses', authMiddleware, responseControllers.getAllResponse);

export default router;
