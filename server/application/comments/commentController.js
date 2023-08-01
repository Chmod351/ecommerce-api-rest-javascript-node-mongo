import Comment from './commentModel.js';
import commentService from './commentService.js';
// function to check ownership
import isResourceOwner from '../../helpers/isOwner.js';

const commentController = {
  createComment,
  getAllComment,
  deleteComment,
};

function createComment(req, res, next) {
  commentService
    .createComment(
      req.user.id,
      req.params.id,
      req.body.description,
      req.body.calification,
    )
    .then((comment) => res.json(comment))
    .catch((error) => next(error));
}

function getAllComment(req, res, next) {
  commentService
    .getAllComment(req.query.page, req.query.size, req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function deleteComment(req, res, next) {
  console.log(req.params.id);
  const isOwner = isResourceOwner(Comment, req.params.id, req.user.id);
  if (isOwner) {
    commentService
      .deleteComment(req.params.id)
      .then((comment) => res.json(comment))
      .catch((error) => next(error));
  } else {
    res.status(401).json({ message: 'unauthorized' });
  }
}

export default commentController;
