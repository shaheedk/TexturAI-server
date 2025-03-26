import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DataBase Connected");
    });
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "TexturAi",
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
