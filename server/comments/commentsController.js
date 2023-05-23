import { Router } from 'express';
const router = Router();

router.post('/products/:productId/comments', createComment);
router.get('/products/:productId/comments', getComments);
router.get('/comments/:id', getCommentById);
router.put('/comments/update/:id', updateComment);
router.delete('/comments/hide/:id', hideComment);
export default router;

function createComment(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function getComments(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function getCommentById(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function updateComment(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function hideComment(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
