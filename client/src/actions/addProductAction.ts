import { ActionFunctionArgs, redirect } from "react-router-dom";
import { addProduct } from "../services/productServices";

export const action = async ({ request }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData());
  
    let error = "";
    if (Object.values(data).includes("")) {
      error = "Todos los campos son obligatorios";
    }
  
    await addProduct(data);
  
    return error.length > 1 ? error : redirect("/");
  };