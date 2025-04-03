import express from 'express'
import { registerUser,loginUser, userCredits, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'
// import { verify } from 'jsonwebtoken'

const userRouter=express.Router()


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)
userRouter.post('/pay-razor',userAuth,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter;

// https://localhost:5000/api/user/register
// http://localhost:5000/api/user/login
// http://localhost:5000/api/user/credits