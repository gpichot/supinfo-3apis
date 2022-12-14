import express from "express";

import hitsCountMiddleware from "./middlewares/hits-count-middleware.js";

import productsRouter from "./routers/products-router.js";
import cartRouter from "./routers/cart-router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(hitsCountMiddleware);

app.use("/products", productsRouter);
app.use("/articles", productsRouter);
app.use("/cart", cartRouter);

export default app;
