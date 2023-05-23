import { Router } from 'express';
const router = Router();

router.post('/products/:productId/comments', createComment);
router.get('/products/:productId/comments', getComments);
router.get('/comments/:id', getCommentById);
router.delete('/comments/hide/:id', hideComment);
export default router;

function createComment(req, res, next) {
  userActions
    .signUp(req.body.id)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}
function getComments(req, res, next) {
  userActions
    .signUp(req.body)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}
function getCommentById(req, res, next) {
  userActions
    .signUp(req.params.id)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}
function hideComment(req, res, next) {
  userActions
    .signUp(req.body.id)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}
