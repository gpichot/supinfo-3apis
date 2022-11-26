import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "supinfo-gabrielp",
});

mongoose.connection.on("error", (e) => {
  console.log("Error", e.toString());
});

mongoose.connection.on("connected", () => {
  console.log("Connection established");
});

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  role: String,
  permissions: [String],
});

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const CartItemSchema = new mongoose.Schema({
  productId: mongoose.ObjectId,
  quantity: Number,
});
const CartSchema = new mongoose.Schema({
  userId: mongoose.ObjectId,
  items: [CartItemSchema],
});

export const User = mongoose.model("User", UserSchema);
export const Product = mongoose.model("Product", ProductSchema);
export const Cart = mongoose.model("Cart", CartSchema);
