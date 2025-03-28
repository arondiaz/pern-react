import { Router } from "express";
import { createProduct, getProducts } from "./handlers/product";
import { body } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

router.get("/",
  getProducts
);

router.post(
  "/",

  //validation
  body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio del producto no puede ir vacio"),

  handleInputErrors,

  createProduct
);

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
