import { Schema, mongoose } from "mongoose"

const badFood = new Schema({
  name: {
    type: String,
    unique: true,
  }
})

module.exports = mongoose.models.BadFood || mongoose.model("BadFood", badFood)