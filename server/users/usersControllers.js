import { Router } from 'express';
import userActions from './usersViews.js';
import cleanBody from '../helpers/sanitizer.js';
const router = Router();

router.post('/signin', cleanBody, signIn);
router.post('/signup', cleanBody, signUp);
router.put('/users/:userId', cleanBody, editUser);
router.get('/users/:userId', getUser);

router.put('/users/admin/:userId', createAdmin);

export default router;

function signIn(req, res, next) {
  userActions
    .signIn(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: 'Email not found in database' }),
    )
    .catch((error) => next(error));
}
function signUp(req, res, next) {
  userActions
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
function editUser(req, res, next) {
  userActions
    .editUser(req.body)
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
    .createAdmin(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}
