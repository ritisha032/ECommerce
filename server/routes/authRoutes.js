import express from "express";
const router=express.Router();

import {signup,login,testController} from "../controllers/authController.js";
import { requireSignIn,isAdmin} from "../middleware/authMiddleware.js";


router.post("/signup",signup);
router.post("/login",login);

//protected routes
router.get("/test",requireSignIn,isAdmin,testController);


export default router;
