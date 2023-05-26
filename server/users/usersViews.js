import bcrypt from 'bcryptjs';
import User from './userModel.js';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../index.js';

const userActions = {
  signIn,
  signUp,
  getUser,
  createAdmin,
};

async function findByEmail(email) {
  const alreadyExists = User.findOne({ email: { $eq: email } });
  if (alreadyExists) {
    return alreadyExists;
  } else {
    throw new Error('not found');
  }
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

async function verifyPassword(user, testUser) {
  const matchPassword = await bcrypt.compare(user.password, testUser.password);
  return matchPassword;
}

async function signIn(user) {
  try {
    const existingUser = await findByEmail(user.email);
    const isPasswordMatch = await verifyPassword(user, existingUser);
    if (!isPasswordMatch) {
      throw new Error('bad request');
    }
    const userId = existingUser._id.toString();
    const token = await generateToken(userId);
    console.log(token);
    return { user: existingUser, sendToken: token };
  } catch (error) {
    throw error;
  }
}

async function signUp(user) {
  const allowedFields = ['email', 'password', 'username'];
  const filteredUser = Object.keys(user)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = user[key];
      return obj;
    }, {});

  const registeredUser = await findByEmail(filteredUser.email);
  if (!registeredUser) {
    const encryptPassword = await hashPassword(filteredUser.password);
    const createUser = new User({ ...filteredUser, password: encryptPassword });
    const newUser = await createUser.save();
    return newUser;
  } else {
    throw new Error('bad request');
  }
}

async function getUser(userId) {
  const user = await User.findById(userId);
  if (user) {
    return user;
  } else {
    throw new Error('bad request');
  }
}

async function createAdmin(userId) {}

export default userActions;
