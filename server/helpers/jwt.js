import Token from './token.js';
import { JWT_TOKEN } from '../../index.js';

const jwt= new Token()

function authMiddleware(req, res, next) {
  const authCookie = req.cookies.token;
  if (!authCookie) {
    return res.status(401).json({
      message: 'Unauthorized: Missing or invalid authorization header',
    });
  }
  const token = authCookie;
  try {
    const decoded = jwt.verifyToken(token, JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
}
export default authMiddleware;
