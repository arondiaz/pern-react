import { Request, Response } from "express";
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";

export const createProduct = async (req: Request, res: Response) => {
  //validation
  await check("name").notEmpty().withMessage("El nombre del producto no puede ir vacio").run(req);

  await check("price").isNumeric().withMessage("Valor no válido").notEmpty().withMessage("El precio del producto no puede ir vacio").run(req);

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //se puede hacer en una sola linea como: const product = await Product.create(req.body)
  //se crea una instancia, objeto creado a partir de la clase Product
  const product = new Product(req.body);
  const savedProduct = await product.save();

  res.json({ data: savedProduct });
};
