import User from '../Users/userModel.js';
import { UnauthorizedError } from './errorHandler.js';

async function adminCheck(req, res, next) {
  const user = await User.findById(req.user.id);
  if (user.isAdmin) {
    next();
  } else {
    next(new UnauthorizedError('You are Unauthorized'));
  }
}

export default adminCheck;
