import request from "supertest";
import server from "../../server";

describe("POST /api/products", () => {
  test("should display errors", async () => {
    const response = await request(server).post("/api/products").send({});
    expect(response.status).not.toBe(201);
    expect(response.body).toHaveProperty("errors");
  });

  test("should validate the price is greater than 0", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Mouse",
      price: -1000,
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");

    expect(response.status).not.toBe(201);
    expect(response.body).not.toHaveProperty("data");
  });

  test("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Mouse",
      price: 300,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");

    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("error");
  });
});

describe("GET /api/products", () => {
  test("should check if api/products url exists", async () => {
    const response = await request(server).get("/api/products");
    expect(response.status).not.toBe(404);
  });

  test("get a json response with products", async () => {
    const response = await request(server).get("/api/products");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("data");
    expect(response.status).not.toBe(404);
  });
});
