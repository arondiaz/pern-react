import { Link, Form, useLoaderData, useActionData } from "react-router-dom";
import { Product } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";

const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

const EditProduct = () => {
  const product = useLoaderData() as Product;
  const error = useActionData() as string;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-black text-slate-500">Editar producto</h2>
        <Link
          to={"/"}
          className="bg-purple-900 rounded-md p-3 text-sm font-bold text-white"
        >
          {" "}
          Volver
        </Link>
      </div>

      <Form className="mt-10" method="POST">
        <ProductForm
        product={product}
        />

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Disponibilidad:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product?.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-purple-800 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Actualizar producto"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </>
  );
};

export default EditProduct;
