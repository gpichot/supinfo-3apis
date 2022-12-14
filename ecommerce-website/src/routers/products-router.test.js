import supertest from "supertest";
import jest from "jest";

import { Product } from "../mongo.js";
import app from "../server";

describe("Products Router GET /", () => {
  beforeAll(async () => {
    await Product.deleteMany({});
    await Product.create({
      name: "Pain au chocolat",
      description: "Hummm le délicieux pain au chocolat 😋",
      price: 1,
    });
    await Product.create({
      name: "Croissant de l'espace 👽",
      description: "C'est encore meilleur",
      price: 1,
    });
  });

  it("should return the list of products", async () => {
    const response = await supertest(app).get("/products").expect(200);

    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        description: "Hummm le délicieux pain au chocolat 😋",
        name: "Pain au chocolat",
        price: 1,
      })
    );
  });
});

describe("Products Router POST /", () => {
  beforeAll(async () => {
    await Product.deleteMany({});
  });

  it("should add the product", async () => {
    const response = await supertest(app)
      .post("/products")
      .set("Authorization", "admin")
      .send({
        name: "Test Product",
      })
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Test Product",
      })
    );

    const ob = await Product.findById(response.body._id);
    expect(ob).toBeTruthy();
  });
});
