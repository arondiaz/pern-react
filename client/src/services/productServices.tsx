import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";
import axios from "axios";

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
