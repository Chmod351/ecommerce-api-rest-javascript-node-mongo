import responseService from './responsesService.js';
import Response from './responsesModel.js';
// function to check ownership
import isResourceOwner from '../helpers/isOwner.js';

const responseControllers = {
  createResponse,
  hideResponse,
  getAllResponse,
};

function createResponse(req, res, next) {
  console.log(req.params.commentId)
  responseService
    .createResponse(req.user.id, req.params.id, req.body.description)
    .then((response) => res.json(response))
    .catch((error) => next(error));
}

function hideResponse(req, res, next) {
  const isOwner = isResourceOwner(Response, req.params.responseId, req.user.id);
  if (isOwner) {
    responseService
      .hideResponse(req.params.responseId)
      .then((response) => res.json(response))
      .catch((error) => next(error));
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
}

function getAllResponse(req, res, next) {
  responseService
    .getAllComments(req.query.page, req.query.size)
    .then((response) => res.json(response))
    .catch((error) => next(error));
}
export default responseControllers;
