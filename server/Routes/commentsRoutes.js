import commentControllers from '../Controllers/commentController.js';
import express from 'express';
import cleanBody from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
  '/comments',
  authMiddleware,
  cleanBody,
  commentControllers.createComment,
);
router.delete('/comments', authMiddleware, commentControllers.deleteComment);
router.get('/comments', authMiddleware, commentControllers.getAllComments);

export default router;
