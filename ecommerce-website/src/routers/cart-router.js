import express, { response } from "express";
import { isUser } from "../middlewares/authentication-middleware.js";
import { Cart } from "../mongo.js";

const router = express.Router();

router.get("/", isUser, async (request, response) => {
  const cartId = request.cookies.cartId;
  const cart = await Cart.findById(cartId);

  response.json(cart);
});

router.post("/", isUser, async (request, response) => {
  const cartId = request.cookies.cartId;
  console.log(cartId);

  const cart = await Cart.findByIdAndUpdate(
    cartId,
    {
      $push: { items: { ...request.body, quantity: 1 } },
    },
    { new: true }
  );

  response.json(cart);
});

export default router;
