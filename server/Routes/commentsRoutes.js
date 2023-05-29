import commentControllers from '../Controllers/commentController.js';
import express from 'express';

const router = express.Router();

router.post('/comments', commentControllers.createComment);
router.delete('/comments', commentControllers.deleteComment);
router.get('/comments', commentControllers.getAllComments);

export default router;
