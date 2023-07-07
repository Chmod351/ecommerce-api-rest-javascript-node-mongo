import userService from './usersService.js';
const maxAge = 24 * 60 * 60 * 1000;

const usersController = {
  signIn,
  signUp,
  getUser,
  getStat,
  googleToken,
};

function signIn(req, res, next) {
  console.log(req.body);
  userService
    .signIn(req.body)
    .then(({ user, sendToken }) => {
      if (user) {
        res.cookie('token', sendToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: maxAge,
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

function googleToken(req, res, next) {
  userService
    .googleToken(req.params.token)
    .then((user) => res.json(user))
    .catch((error) => next(error));
}

export default usersController;
