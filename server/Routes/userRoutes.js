import { Router } from 'express';
import cleanBody from '../helpers/sanitizer.js';
import usersControllers from '../Controllers/usersControllers.js';
import adminCheck from '../helpers/adminCheck.js';
import authMiddleware from '../helpers/jwt.js';
const router = Router();

router.post('/signin', cleanBody, usersControllers.signIn);
router.post('/signup', cleanBody, usersControllers.signUp);
router.get('/users/stats',authMiddleware, adminCheck, usersControllers.getStats);
router.get('/users/find/:id', usersControllers.getUser);


export default router;
