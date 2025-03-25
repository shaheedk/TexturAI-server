import userModel from "../models/userModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Oops! It looks like some details are missing.",
      });
    }
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser=new userModel(userData)
    const user=await newUser.save()

const token =jwt.sign({id:user._id},process.env.JWT_SECRET)

  } catch (err) {}
};
