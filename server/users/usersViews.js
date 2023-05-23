import bcrypt from 'bcryptjs';
import User from './userModel.js';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../index.js';


const userActions = {
  signIn,
  signUp,
  editUser,
  getUser,
  createAdmin,
};

async function findByEmail(email) {
  const alreadyExists = User.findOne({ email: { $eq: email } });
  return alreadyExists;
}

async function hashPassword(password) {
  const bcryptSalt = await bcrypt.genSalt(12);
  const hashed = await bcrypt.hash(password, bcryptSalt);
  return hashed;
}

async function generateToken(userId) {
  const sendToken = jwt.sign({ id: userId }, JWT_TOKEN, {
    expiresIn: '48h',
  });
  return sendToken;
}

async function signIn(user) {}

async function signUp(user) {
  const registeredUser = await findByEmail(user.email);
  if (!registeredUser) {
    const encryptPassword = await hashPassword(user.password);
    const createUser = new User({ ...user, password: encryptPassword });
    const newUser = await createUser.save();
    return newUser;
  } else {
    throw  new Error('bad request');
  }
}

async function editUser(user) {}

async function getUser(userId) {}

async function createAdmin(userId) {}

export default userActions;
