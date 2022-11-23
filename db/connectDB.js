import mongoose from "mongoose"

async function connectDB(){
  mongoose.connect(process.env.MONGO_URI)
}

export default connectDB