import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProductById } from "../services/productServices";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id !== undefined) {
    const product = await getProductById(params.id);

    if (!product) {
      return redirect("/");
    }
    return product;
  }
};
