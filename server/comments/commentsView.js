import Comments from './commentsModel.js';

const commentActions = {
  createComment,
  getComments,
  hideComment,
};

async function createComment(calification, description, user) {
  const comment = new Comments({
    calification,
    description,
    userId: user,
  });
  const createdComment = await comment.save();
  return createdComment;
}

async function getComments(post) {
  const comments = await Comments.find({ postId: post })
    .sort({ timestamp: -1 })
    .limit(10);
  return comments;
}

async function hideComment(user, commentId) {
  if (user.isAdmin) {
    const comment = await Comments.findByIdAndUpdate(commentId, { hide: true });
    return comment;
  } else {
    throw new Error('unauthorized');
  }
}
export default commentActions;
