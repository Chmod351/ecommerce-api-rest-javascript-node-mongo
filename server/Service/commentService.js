import Comment from '../Models/commentModel.js';

const commentService = {
  getAllComment,
  deleteComment,
  createComment,
};

async function getAllComment(page, size) {
  //pagination for comments instead get all comments
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Comment.find().skip(skipCount).limit(pageSize);
}

async function deleteComment(commentId) {
  return await Comment.findByIdAndDelete(commentId);
}

async function createComment(userId, body) {
  const newComment = new Comment({ ...body, userId });

  return await newComment.save();
}

export default commentService;
