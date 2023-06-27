import { Router } from 'express';
import usersController from '../Controllers/usersControllers.js';
import adminCheck from '../helpers/adminCheck.js';
import authMiddleware from '../helpers/jwt.js';
import {cleanBody} from '../helpers/sanitizer.js';
const router = Router();

router.post('/users/signin', cleanBody, usersController.signIn);

router.post('/users/signup', cleanBody, usersController.signUp);

router.get('/users/stats', authMiddleware, adminCheck, usersController.getStat);

router.get('/users/find/:userId', usersController.getUser);

export default router;
