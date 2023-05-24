import { Router } from 'express';
import commentActions from './commentsView.js';
import cleanBody from '../helpers/sanitizer.js';
const router = Router();

router.post('/products/:productId/comments', cleanBody, createComment);
router.get('/products/:productId/comments', getComments);
router.put('/comments/hide/:id', hideComment);
export default router;

function createComment(req, res, next) {
  commentActions
    .createComment(req.body.calification, req.body.description, req.user._id)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}

function getComments(req, res, next) {
  commentActions
    .getComments(req.params.productId)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}

function hideComment(req, res, next) {
  commentActions
    .hideComment(req.user, req.params.id)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}
