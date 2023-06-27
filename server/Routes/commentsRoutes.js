import commentController from '../Controllers/commentController.js';
import express from 'express';
import { cleanBody } from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/comments/create',
  authMiddleware,
  cleanBody,
  commentController.createComment,
);
router.delete('/comments/delete', authMiddleware, commentController.deleteComment);
router.get('/comments/getAll', authMiddleware, commentController.getAllComment);

export default router;
