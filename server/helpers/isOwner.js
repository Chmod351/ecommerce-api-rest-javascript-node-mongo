async function isResourceOwner(resourceModel, paramName, requestUser) {
  const resource = await resourceModel.findById(paramName);
  if (
    resource &&
    resource.userId.toString().trim() === requestUser.toString().trim()
  ) {
    return true;
  } else {
    return false;
  }
}
export default isResourceOwner;
