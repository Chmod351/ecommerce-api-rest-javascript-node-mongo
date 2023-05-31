async function isResourceOwner(resourceModel, paramName, requestUser) {
  const resource = await resourceModel.findById(paramName);
  if (
    resource &&
    resource.userId.toString().trim() === requestUser.toString().trim()
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
export default isResourceOwner;
