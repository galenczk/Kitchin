import { Schema, mongoose } from "mongoose";

const fridgeFood = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.models.FridgeFood || mongoose.model("FridgeFood", fridgeFood)