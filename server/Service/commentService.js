import { NotFoundError } from '../helpers/errorHandler.js';
import Comment from '../Models/commentModel.js';

const commentService = {
  getAllComment,
  deleteComment,
  createComment,
};

// get comment by id
async function getCommentById(id) {
  const comment = await Comment.findById(id);
  if (comment) {
    return comment;
  } else {
    return new NotFoundError(`Comment Not Found`);
  }
}

// create comment
async function createComment(userId, calification, description) {
  const newComment = new Comment({
    userId,
    calification,
    description,
  });
  const res = await newComment.save();

  return res;
}

// get products comment paginated
async function getAllComment(page, size) {
  //pagination for comments instead get all comments
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Comment.find().skip(skipCount).limit(pageSize);
}

// delete comment by id
async function deleteComment(commentId) {
  await getCommentById(commentId);
  const res = await Comment.findByIdAndDelete(commentId);
  return res;
}

export default commentService;
