function isResourceOwner(resourceModel, paramName) {
  return async function (req, res, next) {
    const resource = await resourceModel.findById(req.params[paramName]);
    if (resource && resource.userId === req.user.id) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
}
export default isResourceOwner;
