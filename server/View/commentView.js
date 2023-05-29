import CommentSchema from '../Models/commentModel.js';

const commentActions = {
  getAllComments,
  deleteComment,
  createComment,
};

async function getAllComments(page, size) {}

async function deleteComment(commentId) {}

async function createComment(userId, productId) {}

export default commentActions;
