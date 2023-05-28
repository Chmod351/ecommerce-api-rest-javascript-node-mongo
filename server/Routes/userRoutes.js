import { Router } from "express";
import cleanBody from "../helpers/sanitizer.js";
import usersControllers from "../Controllers/usersControllers.js";
const router = Router();

router.post("/signin", cleanBody, usersControllers.signIn);
router.post("/signup", cleanBody, usersControllers.signUp);
router.get("/users/:id", usersControllers.getUser);
// router.put('/users/admin/:userId', createAdmin);

export default router;
