import { Router } from 'express';
import usersController from './usersControllers.js';
import adminCheck from '../helpers/adminCheck.js';
import authMiddleware from '../helpers/jwt.js';
import { cleanBody } from '../helpers/sanitizer.js';
const router = Router();

router.post('/signIn', cleanBody, usersController.signIn);

router.post('/signUp', cleanBody, usersController.signUp);

router.get('/google/signIn/:token', cleanBody, usersController.googleToken);

router.get('/stats', authMiddleware, adminCheck, usersController.getStat);

router.get('/find/:userId', usersController.getUser);

export default router;
