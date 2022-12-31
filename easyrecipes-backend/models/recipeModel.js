import mongoose from "mongoose";

let productSchema = mongoose.Schema({
  ingredientID: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

let commentSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  commentID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  commentText: {
    type: String,
    required: true,
  },
  commentLikes: {
    type: Number,
    required: true,
  },
});

let recipeSchema = mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  recipeID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  recipeThumbnail: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  recipeDetails: {
    type: String,
    required: true,
  },
  recipeViews: {
    type: Number,
    required: true,
  },
  recipeLikes: {
    type: Number,
  },
  recipeTags: {
    type: Array,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: [commentSchema],
  ingredients: [productSchema],
});

const recipe = mongoose.model("recipes", recipeSchema);

export default recipe;
