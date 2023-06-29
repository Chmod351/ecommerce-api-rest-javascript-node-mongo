import commentController from '../Controllers/commentController.js';
import express from 'express';
import { cleanBody } from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
'/comments/create/:productId',
  authMiddleware,
  cleanBody,
  commentController.createComment,
);
router.get('/comments/getAll/:productId', authMiddleware, commentController.getAllComment);

router.delete('/comments/delete/:id', authMiddleware, commentController.deleteComment);


export default router;
