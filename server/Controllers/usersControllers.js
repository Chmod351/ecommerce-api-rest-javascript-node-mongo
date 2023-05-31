import userService from '../View/usersViews.js';

const usersController = {
  signIn,
  signUp,
  getUser,
  getStat,
};

function signIn(req, res, next) {
  userService
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
  userService
    .signUp(req.body)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}

function getStat(req, res, next) {
  userService
    .getUserStat()
    .then((stats) => res.json(stats))
    .catch((error) => next(error));
}

function getUser(req, res, next) {
  userService
    .getUser(req.params.userId)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}



export default usersController;
