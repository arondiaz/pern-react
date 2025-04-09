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

/**
 * @swagger
 * /api/products/{id}:
 *
 *  get:
 *     summary: Obtener un producto por ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 *
 */
router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductID
);

/**
 * @swagger
 * /api/products:
 *    post:
 *       summary: Creates a new product
 *       tags:
 *          - Products
 *       description: Returns a new record in the database
 *       requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                 type: object
 *                 properties:
 *                      name:
 *                           type: string
 *                           example: "Auriculares Razer V8"
 *                      price:
 *                            type: number
 *                            example: 759
 *       responses:
 *          201:
 *               description: Product creatred successfully
 *          400:
 *               description: Bad request
 */

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
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),

  handleInputErrors,

  createProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a product with user input
 *     tags:
 *       - Products
 *     description: Return the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to edit
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Auriculares Razer V8"
 *               price:
 *                 type: number
 *                 example: 759
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

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
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  body("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"),

  handleInputErrors,

  updateProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *     summary: Update product availability
 *     tags:
 *        - Products
 *     description: Returns the updated availability
 *     parameters:
 *         - in: path
 *           name: id
 *           description: The ID of the product
 *           required: true
 *           schema:
 *             type: integer
 *
 *     responses:
 *           200:
 *              description: Successful
 *              content:
 *                application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *           400:
 *              description: Bad request
 *           404:
 *              description: Product not found
 *
 */

router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,

  updateAvailability
);

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *     summary: Delete product
 *     tags:
 *        - Products
 *     description: delete product per ID
 *     parameters:
 *         - in: path
 *           name: id
 *           description: The ID of the product
 *           required: true
 *           schema:
 *             type: integer
 *
 *     responses:
 *           200:
 *              description: Successful
 *              content:
 *                application/json:
 *                  type: string
 *                  value: "Producto eliminado correctamente"

 *           400:
 *              description: Bad request
 *           404:
 *              description: Product not found
 *
 */

router.delete(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,

  deleteProduct
);

export default router;
