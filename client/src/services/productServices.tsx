import { safeParse } from "valibot";
import {
  DraftProductSchema,
  ProductsSchema,
  ProductSchema,
  Product,
} from "../types";
import axios from "axios";
import { toBoolean } from "../helpers";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export const productServices = async (data: ProductData) => {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: Number(data.price),
    }); // poniendo +data.price tambien es una forma de cambiar el string a number
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;

      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;

    const { data } = await axios(url);

    const result = safeParse(ProductsSchema, data.data);

    if (result.success) {
      return result.output;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: Product["id"]) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

    const { data } = await axios(url);

    const result = safeParse(ProductSchema, data.data);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("ERROR: Producto no encontrado");
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (data: ProductData, id: Product["id"]) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

    const updatedProduct = safeParse(ProductSchema, {
   
      id,
      name: data.name,
      price: Number(data.price),
      availability: toBoolean(data.availability.toString()),
    });

    await axios.put(url, updatedProduct.output);

  } catch (error) {
    console.log(error);
  }
};
