import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola");
});

router.post("/", createProduct);

router.put("/", (req, res) => {
  res.send("Desde PUT");
});

router.patch("/", (req, res) => {
  res.send("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.send("Desde DELETE");
});


export default router;