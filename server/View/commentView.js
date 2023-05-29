import Comments from '../Models/commentModel.js';

const commentActions = {
  getAllComments,
  deleteComment,
  createComment,
};

async function getAllComments(page, size) {
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Comments.find().skip(skipCount).limit(pageSize);
}

async function deleteComment(commentId) {}

async function createComment(userId, productId) {}

export default commentActions;
