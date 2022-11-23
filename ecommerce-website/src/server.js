import express from "express";

import hitsCountMiddleware from "./middlewares/hits-count-middleware.js";

import productsRouter from "./routers/products-router.js";
import cartRouter from "./routers/cart-router.js";

const app = express();

app.use(express.json());
app.use(hitsCountMiddleware);

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`);
});
