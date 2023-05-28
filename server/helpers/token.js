import jwt from 'jsonwebtoken';

class Token {
  async generateToken(userId, secret, options) {
    const token = jwt.sign({ id: userId }, secret, options);
    return token;
  }

  async verifyToken(token, secret) {
    const decoded = jwt.verify(token, secret);
    return decoded;
  }
}

export default Token;
