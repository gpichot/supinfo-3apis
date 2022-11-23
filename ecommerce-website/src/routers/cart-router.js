import express from "express";
import { isUser } from "../middlewares/authentication-middleware.js";

const router = express.Router();

const cart = [
  {
    productId: 1,
    quantity: 1,
  },
];

router.get("/", isUser, (request, response) => {
  response.json(cart);
});

router.post("/", isUser, (request, response) => {
  const newCartItem = {
    ...request.body,
    quantity: 1,
  };

  cart.push(newCartItem);

  response.status(201).json(newCartItem);
});

export default router;
