import responsesActions from '../View/responsesView.js';

const responseControllers = {
  createResponse,
  deleteResponse,
  getAllResponse,
};

function createResponse(req, res, next) {
  responsesActions
    .createResponse(req.user.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => next(error));
}

function deleteResponse(req, res, next) {
  if (req.user.id === response.userId || req.user.isAdmin) {
    responsesActions
      .deleteResponse(req.params.id)
      .then((response) => res.json(response))
      .catch((error) => next(error));
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
}

function getAllResponse(req, res, next) {
  responsesActions
    .getAllComments(req.query.page, req.query.size)
    .then((response) => res.json(response))
    .catch((error) => next(error));
}
export default responseControllers;
