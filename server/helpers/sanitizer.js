import { query, validationResult } from 'express-validator';
import sanitize from 'mongo-sanitize';

// Middleware para validar y sanear la consulta en la URL
const validateQuery = [
  query('q').escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

function cleanBody(req, res, next) {
  req.body = sanitize(req.body);
  next();
}
export { validateQuery, cleanBody };
