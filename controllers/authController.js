
import User from "../models/User.js";
import {comparePassword, hashPassword} from "../helper/authHelper.js";

import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup=async(req,res)=>
{
    try{

        //fetch details from the request body
        const{name,email,password,phone,address}=req.body;

        //check if an user already exists with the given credentials
        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exists",
            });
        }

        //hash the password
       
        const hashedPassword=await hashPassword(password);

        //create user with the given data
        const user=await new User({
            name,email,password:hashedPassword,phone,address
        }).save();

        return res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        });
    }
    catch(err){
        console.error(err);

        return res.status(500).json({
            success:false,
            message:"user cannot be registered",
        });
    }
}
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials",
            })
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid Password",
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).json({
                success:false,
                message:"Invalid Password",
            })
        }

        //create a JWT TOKEN
        user.password=undefined;
       
        const token=await JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        user.token=token;
        res.status(200).json({
            success:true,
            message:"Logged iN SUCCESSFULLY",
            user,
            token,
            })
    }
    
    catch(err){
        console.error(err);

        return res.status(500).json({
            success:false,
            message:"user cannot be loggedin",
        });
    
}
}
