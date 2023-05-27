import User from '../Models/userModel.js';

async function adminCheck(req, res, next) {
  const user = await User.findById(req.user.id);
  if (user && user.isAdmin) {
    next();
  } else {
    next(new Error('unauthorized'));
  }
}

export default adminCheck;
