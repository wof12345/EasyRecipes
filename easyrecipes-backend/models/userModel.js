import mongoose from "mongoose";

let productSchema = mongoose.Schema({
  ingredientID: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

let cartSchema = mongoose.Schema({
  cartProducts: [productSchema],
  cartID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  cartPrice: {
    type: Number,
    required: true,
  },
});

let userOrderSchema = mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  orderDate: { type: Date, required: true },
  orderDetails: cartSchema,
});

let userTransactionSchema = mongoose.Schema({
  transactionID: {
    type: String,
    required: true,
  },
  history: [userOrderSchema],
});

let userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userRealName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  userID: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  userPass: {
    type: String,
    required: true,
  },
  userMobileNo: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userGender: {
    type: String,
    required: true,
  },
  userBirthdate: {
    type: String,
    required: true,
  },
  userCreditInfo: {
    type: String,
    required: true,
  },
  thumbNail: {
    type: String,
    required: true,
  },
  userCart: [cartSchema],
  userHistory: [userTransactionSchema],
  userClickedTags: [],
});

const user = mongoose.model("users", userSchema);

export default user;
