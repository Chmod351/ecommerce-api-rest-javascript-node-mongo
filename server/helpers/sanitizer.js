import sanitize from 'mongo-sanitize';

function cleanBody(req, res, next) {
  req.body = sanitize(req.body);
  next();
}
export default cleanBody;
