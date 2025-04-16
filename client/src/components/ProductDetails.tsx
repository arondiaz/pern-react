import { ActionFunctionArgs, Form, redirect, useNavigate } from "react-router-dom";
import { Product } from "../types";
import { deleteProductById } from "../services/productServices";

type ProductDetailsProps = {
  product: Product;
};

export const action = async ({ params }: ActionFunctionArgs) => {

  await deleteProductById(params.id);
  return redirect("/");
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
        <div className="gap-2 flex justify-center  ">
          <button
            className="bg-purple-800 uppercase font-bold text-md cursor-pointer w-full rounded-2xl text-white"
            onClick={() => navigate(`producto/${id}/editar`)}
          >
            Editar
          </button>

          <Form
            method="POST"
            action={`producto/${id}/eliminar`}
            onSubmit={(e)=>{
            if(!confirm(`Está seguro de eliminar el producto ${name}?`)){
            e.preventDefault();
            }
            }}
            className="w-full "
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-800 w-full uppercase font-bold text-md rounded-2xl text-white cursor-pointer"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
