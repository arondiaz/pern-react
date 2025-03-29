import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

export const getProductID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findProduct = await Product.findByPk(id);

    if (!findProduct) {
      return res.status(400).json({ error: "No existe el producto" });
    }
    res.json({ data: findProduct });
  } catch (error) {
    return res.status(500).json({ error: "Error de conexión" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    //se puede hacer en una sola linea como: const product = await Product.create(req.body)
    //se crea una instancia, objeto creado a partir de la clase Product
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json({ data: savedProduct });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: "No existe el producto" });
    }

    await product.update(req.body);
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: "No existe el producto" });
    }

    product.availability = !product.availability;
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: "No existe el producto" });
    }

    //en caso de no poderse eliminar informacion, se podria realizar un eliminado lógico donde tendriamos que tener una columna con un boolean tipo visibility para mostrar o no determinada informacion
    await product.destroy();

    res.status(200).json({ data: "Producto eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
