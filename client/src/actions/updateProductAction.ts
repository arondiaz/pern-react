import { ActionFunctionArgs, redirect } from "react-router-dom";
import { updateProduct } from "../services/productServices";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }

  if (error.length) {
    return error;
  }

  if (params.id !== undefined) {
    const id = +params.id;
    await updateProduct(data, id);
    return redirect("/");
  }
};
