import { getProducts } from "../services/productServices";

export const loader = async () => {
  const products = await getProducts();
  return products;
};
