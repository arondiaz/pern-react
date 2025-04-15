import { useNavigate } from "react-router-dom";
import { Product } from "../types";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { name, price, id } = product;

  const isAvailable = product.availability;

  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{name}</td>
      <td className="p-3 text-lg text-gray-800">{price}</td>
      <td className="p-3 text-lg text-gray-800">
        {isAvailable ? "Disponible" : "No disponible"}
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="bg-amber-400 gap-2 flex justify-center rounded-2xl">
          <button onClick={() =>  navigate(`producto/${id}/editar`, {
            state: {
              product
            }
          })}>Editar</button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
