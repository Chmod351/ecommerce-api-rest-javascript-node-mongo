import commentActions from '../View/commentView.js';

const commentControllers = {
  createComment,
  deleteComment,
  getAllComments,
};

function createComment(req, res, next) {
  commentActions
    .createComment(req.user.id, req.body.calification, req.body.description)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function deleteComment(req, res, next) {
  commentActions
    .deleteComment(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}

function getAllComments(req, res, next) {
  commentActions
    .getAllComments(req.query.page, req.query.size)
    .then((product) => res.json(product))
    .catch((error) => next(error));
}
export default commentControllers;
