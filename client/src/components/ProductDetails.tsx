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
      <td className="p-3 text-lg text-gray-800">
        <div className="bg-purple-800 gap-2 flex justify-center w-full rounded-2xl text-white">
          <button className="uppercase font-bold text-md cursor-pointer" onClick={() =>  navigate(`producto/${id}/editar`)}>Editar</button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
