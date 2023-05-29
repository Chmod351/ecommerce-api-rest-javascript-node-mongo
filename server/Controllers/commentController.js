import commentService from '../View/commentView.js';

const commentController = {
  createComment,
  deleteComment,
  getAllComment,
};

function createComment(req, res, next) {
  commentService
    .createComment(req.user.id, req.body)
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}

function deleteComment(req, res, next) {
  if (req.user.id === comment.userId || req.user.isAdmin) {
    commentService
      .deleteComment(req.params.id)
      .then((comment) => res.json(comment))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'unauthorized' });
  }
}

function getAllComment(req, res, next) {
  commentService
    .getAllComments(req.query.page, req.query.size)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
export default commentController;
