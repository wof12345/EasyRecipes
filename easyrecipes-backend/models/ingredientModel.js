import mongoose from "mongoose";

let ingredientSchema = mongoose.Schema({
  ingredientName: {
    type: String,
    required: true,
  },
  ingredientPrice: {
    type: String,
    required: true,
  },
  ingredientStockQuantity: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  ingredientID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  ingredientDetails: {
    type: String,
    required: true,
  },
});

const ingredient = mongoose.model("ingredients", ingredientSchema);

export default ingredient;
