import { Product } from "../types";

type ProductDetailsProps = {
  product: Product
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  console.log(product);
  const { name, price } = product;

  const isAvailable = product.availability
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{name}</td>
      <td className="p-3 text-lg text-gray-800">{price}</td>
      <td className="p-3 text-lg text-gray-800">{isAvailable ? "Disponible" : "No disponible"}</td>
      <td className="p-3 text-lg text-gray-800 "></td>
    </tr>
  );
};

export default ProductDetails;
