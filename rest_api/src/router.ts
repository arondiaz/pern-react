import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductID,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Product:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Product ID
 *                  example: 1
 *              name:
 *                  type: string
 *                  description: Product name
 *                  example: Auriculares DT770 PRO
 *              price:
 *                  type: number
 *                  description: Product price
 *                  example: 2000
 *              availability:
 *                  type: boolean
 *                  description: The product availability
 *                  example: true
 *                   
 *                   
 * 
 */

/**
 * @swagger
 * /api/products:
 * 
 *      get:
 *          summary: Get a list of products
 *          tags: 
 *              - Products
 *          description: Return a list of product
 *          responses: 
 *             200:
 *                 description: Successful response
 *                 content: 
 *                     application/json:
 *                         schema:
 *                                type: array
 *                                items:
 *                                  $ref: '#/components/schemas/Product'
 * 
 */

router.get("/", getProducts);

router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductID
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
    .withMessage("El precio del producto no puede ir vacio")
    .custom(value => value > 0).withMessage("Precio no válido"),

  handleInputErrors,

  createProduct
);

router.put(
  "/:id",
  //validation
  param("id").isInt().withMessage("ID no válido"),

  body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio del producto no puede ir vacio")
    .custom(value => value > 0).withMessage("Precio no válido"),
  body("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"),

  handleInputErrors,

  updateProduct
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,

  updateAvailability
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,

  deleteProduct
);

export default router;
