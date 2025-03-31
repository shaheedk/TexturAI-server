import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT=process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors())
await connectDB()

app.get('/',(req,res)=>{
res.send('api working')
})
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})

