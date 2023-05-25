import { Router } from 'express';
import userActions from './usersViews.js';
import cleanBody from '../helpers/sanitizer.js';
const router = Router();

router.post('/signin', cleanBody, signIn);
router.post('/signup', cleanBody, signUp);
router.get('/users/:id', getUser);
router.put('/users/admin/:userId', createAdmin);

export default router;

function signIn(req, res, next) {
  userActions
    .signIn(req.body)
    .then(({ user, sendToken }) => {
      if (user) {
        res.cookie('token', sendToken, {
          // httpOnly: true,
          secure: true,
        });
        res.json(user);
      } else {
        res.status(400).json({ message: 'Email not found in database' });
      }
    })
    .catch((error) => next(error));
}
function signUp(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}

function getUser(req, res, next) {
  userActions
    .getUser(req.params.id)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function createAdmin(req, res, next) {
  userActions
    .createAdmin(req.params.id)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
