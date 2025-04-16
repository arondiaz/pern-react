import { ActionFunctionArgs, redirect } from "react-router-dom";
import { deleteProductById } from "../services/productServices";

export const action = async ({ params }: ActionFunctionArgs) => {
  await deleteProductById(params.id);
  return redirect("/");
};
