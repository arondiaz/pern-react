import { Request, Response } from "express";
import Product from "../models/Product.model";

export const createProduct = async (req: Request, res: Response) => {
  //se puede hacer en una sola linea como: const product = await Product.create(req.body)
  //se crea una instancia, objeto creado a partir de la clase Product
  const product = new Product(req.body);
  const savedProduct = await product.save();

  res.json({ data: savedProduct });
};
