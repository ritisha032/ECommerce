import express from "express";
const router=express.Router();

import {signup,login,forgotPasswordController, updateProfileController, getOrdersController} from "../controllers/authController.js";
import { requireSignIn,isAdmin} from "../middleware/authMiddleware.js";


router.post("/signup",signup);
router.post("/login",login);
router.post("/forgot-password",forgotPasswordController);

//protected routes
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected route for admin

//protected routes
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders

router.get('/orders',requireSignIn,getOrdersController);


export default router;
