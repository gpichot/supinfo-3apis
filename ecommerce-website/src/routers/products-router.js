import express from "express";
import { isAdmin } from "../middlewares/authentication-middleware.js";

import { Product } from "../mongo.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const products = await Product.find();
  response.json(products);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;

  const product = await Product.findById(id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.json(product);
});

router.post("/", isAdmin, async (request, response) => {
  const newProduct = await Product.create(request.body);

  response.status(201).json(newProduct);
});

router.put("/:id", isAdmin, async (request, response) => {
  const id = request.params.id;

  const product = await Product.findByIdAndUpdate(id, request.body, {
    new: true,
  });

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.status(200).json(product);
});

router.delete("/:id", isAdmin, async (request, response) => {
  const id = request.params.id;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.status(204).json();
});

export default router;
