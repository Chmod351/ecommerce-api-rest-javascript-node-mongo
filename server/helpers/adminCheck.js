import User from '../Models/userModel.js';

async function adminCheck(req, res, next) {
  console.log(req);
  const user = await User.findById(req.user.id);
  if (user.isAdmin) {
    next();
  } else {
    next(new Error('unauthorized'));
  }
}

export default adminCheck;
