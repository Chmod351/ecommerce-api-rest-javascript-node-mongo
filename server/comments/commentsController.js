import { Router } from 'express';
const router = Router();

router.post('/products/:productId/comments', createComment);
router.get('/products/:productId/comments', getComments);
router.get('/comments/:id', getCommentById);
router.put('/comments/update/:id', updateComment);
router.put('/comments/hide/:id', hideComment);
