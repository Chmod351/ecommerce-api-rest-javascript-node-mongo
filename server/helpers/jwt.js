import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../index.js';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.cookie;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Unauthorized: Missing or invalid authorization header',
    });
  }
  const token = authHeader.split('=')[1];
  try {
    const decoded = jwt.verify(token, JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
}
export default authMiddleware;
