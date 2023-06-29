class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 403;
  }
}
class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}

function errorHandler(error, req, res, next) {
  if (error.statusCode) {
    res.status(error.statusCode).json({ error: error.message });
  }
  next();
}
export {
  errorHandler,
  UnauthorizedError,
  BadRequestError,
  AuthenticationError,
  NotFoundError,
};
