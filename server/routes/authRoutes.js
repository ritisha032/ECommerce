import express from "express";
const router=express.Router();

import {signup,login,testController,forgotPasswordController} from "../controllers/authController.js";
import { requireSignIn,isAdmin} from "../middleware/authMiddleware.js";


router.post("/signup",signup);
router.post("/login",login);
router.post("/forgot-password",forgotPasswordController);

//protected routes
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});


export default router;