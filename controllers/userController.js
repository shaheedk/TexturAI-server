import userModel from "../models/userModel.js";
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name||!email||!password){
            return res.json({success:false,message:"Oops! It looks like some details are missing."})
        }
    }catch(err){

    }
}
