import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { productServices } from "../services/productServices";
import ProductForm from "../components/ProductForm";

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }

  await productServices(data);

  return error.length > 1 ? error : redirect("/");
};

const NewProduct = () => {
  const error = useActionData() as string;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-black text-slate-500">Agregar producto</h2>
        <Link
          to={"/"}
          className="bg-purple-900 rounded-md p-3 text-sm font-bold text-white"
        >
          {" "}
          Volver
        </Link>
      </div>

      <Form className="mt-10" method="POST">
        <ProductForm />

        <input
          type="submit"
          className="mt-5 w-full bg-purple-800 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </>
  );
};

export default NewProduct;
