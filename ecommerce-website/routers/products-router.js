import express from "express";

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Description 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Description 2",
  },
];

router.get("/", (request, response) => {
  response.json(products);
});

router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.json(product);
});

router.post("/", (request, response) => {
  const newProduct = {
    ...request.body,
    id: Math.floor(Math.random() * 1000 * 1000 * 100),
  };

  products.push(newProduct);

  response.status(201).json(newProduct);
});

router.put("/:id", (request, response) => {
  const id = parseInt(request.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  product.name = request.body.name;
  product.price = request.body.price;
  product.description = request.body.description;

  response.status(200).json(product);
});

router.delete("/:id", (request, response) => {
  const id = parseInt(request.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const index = products.indexOf(product);

  products.splice(index, 1);

  response.status(204).json();
});

export default router;
