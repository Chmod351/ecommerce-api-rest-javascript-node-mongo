import commentController from '../Controllers/commentController.js';
import express from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/comment',
  authMiddleware,
  cleanBody,
  commentController.createComment,
);
router.delete('/comment', authMiddleware, commentController.deleteComment);
router.get('/comment', authMiddleware, commentController.getAllComment);

export default router;
