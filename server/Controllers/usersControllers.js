import userActions from '../View/usersViews.js';
const usersControllers={
  signIn,
  signUp,
  getUser
}

function signIn(req, res, next) {
  userActions
    .signIn(req.body)
    .then(({ user, sendToken }) => {
      if (user) {
        res.cookie('token', sendToken, {
          httpOnly: true,
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
// function createAdmin(req, res, next) {
//   userActions
//     .createAdmin(req.params.id)
//     .then((user) => res.json(user))
//     .catch((error) => next(error));
// }
export default usersControllers