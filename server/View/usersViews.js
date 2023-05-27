import bcrypt from 'bcryptjs';
import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../index.js';

const userActions = {
  signIn,
  signUp,
  getUser,
  // createAdmin,
};

async function findByEmail(email) {
  const alreadyExists = await User.findOne({ email: { $eq: email } });
  if (alreadyExists) {
    return alreadyExists;
  } else {
    return false;
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
  const existingUser = await findByEmail(user.email);
  if (!existingUser) {
    throw new Error('not found');
  } else {
    const isPasswordMatch = await verifyPassword(user, existingUser);
    if (!isPasswordMatch) {
      throw new Error('wrong credentials');
    } else {
      const userId = existingUser._id.toString();
      const token = await generateToken(userId);
      return { user: existingUser, sendToken: token };
    }
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

// async function createAdmin(userId) {}

export default userActions;
