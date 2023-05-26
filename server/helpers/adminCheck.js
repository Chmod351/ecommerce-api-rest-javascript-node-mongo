import User from '../users/userModel.js';

async function adminCheck(req, res, next) {
  const user = await User.findById(req.user.id);
  console.log(user);
  if (user && user.isAdmin) {
    next();
  } else {
    next(new Error('unauthorized'));
  }
}

export default adminCheck;
