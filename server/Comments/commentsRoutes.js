import commentController from './commentController.js';
import express from 'express';
import { cleanBody } from '../helpers/sanitizer.js';
import authMiddleware from '../helpers/jwt.js';
const router = express.Router();

router.post(
'/create/:productId',
  authMiddleware,
  cleanBody,
  commentController.createComment,
);
router.get('/getAll/:productId', authMiddleware, commentController.getAllComment);

router.delete('/delete/:id', authMiddleware, commentController.deleteComment);


export default router;
