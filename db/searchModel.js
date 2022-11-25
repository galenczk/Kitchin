import { Schema, mongoose } from "mongoose";

const searchResults = new Schema({
  recipes: {
    type: Array,
    unique: true,
  },
});

module.exports = mongoose.models.searchResults || mongoose.model("SearchResults", searchResults);
