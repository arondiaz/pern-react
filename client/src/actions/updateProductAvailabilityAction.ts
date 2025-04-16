import { ActionFunctionArgs } from "react-router-dom";
import { updateProductAvailability } from "../services/productServices";

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  await updateProductAvailability(data);

  return {};
};
