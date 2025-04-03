import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    credits: { type: Number, required: true },
    payment:{ type: Boolean, required: true },
    date:{type:Number}
});


// Ensure the model uses the "texturAi" collection explicitly
const transactionModel = mongoose.models.transaction|| mongoose.model("transaction", transactionSchema);

export default transactionModel;
