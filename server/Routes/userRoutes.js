import { Router } from 'express';
import cleanBody from '../helpers/sanitizer.js';
import usersController from '../Controllers/usersControllers.js';
import adminCheck from '../helpers/adminCheck.js';
import authMiddleware from '../helpers/jwt.js';
const router = Router();

router.post('/signin', cleanBody, usersController.signIn);
router.post('/signup', cleanBody, usersController.signUp);
router.get('/user/stat',authMiddleware, adminCheck, usersController.getStat);
router.get('/user/find/:id', usersController.getUser);


export default router;
