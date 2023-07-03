import JWT from "jsonwebtoken";
import User from "../models/User.js";
export const requireSignIn=async(req,res,next)=>{
    try{

        const token=req.header("Authorization").replace("Bearer ","");
        const decode=await JWT.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();

    }catch(error){
        console.error(error);
    }
}
//admin accesss
export const isAdmin=async(req,res,next)=>{
    try{
       
      
        if(req.user.role !== 1)
        {
           return res.status(400).json({
            success:false,
            message:"User is not an admin",
           });
        }
        else{
            next();
        }
    }catch(error){
        console.error(error);
    }
}