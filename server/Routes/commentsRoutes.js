import commentControllers from '../Controllers/commentController';
import express from 'express';

const router = express.Router();

router.post('/comments', commentController.createComment);
router.delete('/comments', commentControllers.deleteComment);
router.get('/comments', commentControllers.getAllComments);

export default router;
