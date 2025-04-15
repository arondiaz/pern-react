import { useLocation } from "react-router-dom";
import { Link, Form } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();

  const { id, name, price, availability } = location.state.product;

  return  <>
  <div className="flex justify-between">
    <h2 className="text-2xl font-black text-slate-500">Editar producto</h2>
    <Link
      to={"/"}
      className="bg-blue-600 rounded-md p-3 text-sm font-bold text-white"
    >
      {" "}
      Volver
    </Link>
  </div>

  <Form className="mt-10" method="POST">
    <div className="mb-4">
      <label className="text-gray-800" htmlFor="name">
        Nombre Producto:
      </label>
      <input
        id="name"
        type="text"
        className="mt-2 block w-full p-3 bg-gray-50"
        placeholder="Nombre del Producto"
        name="name"
        defaultValue={name}
      />
    </div>
    <div className="mb-4">
      <label className="text-gray-800" htmlFor="price">
        Precio:
      </label>
      <input
        id="price"
        type="number"
        className="mt-2 block w-full p-3 bg-gray-50"
        placeholder="Precio Producto. ej. 200, 300"
        name="price"
        defaultValue={price}
      />
    </div>

    <div className="mb-4">
      <label className="text-gray-800" htmlFor="availability">
        Disponibilidad
      </label>
      <input
        id="availability"
        type="boolean"
        className="mt-2 block w-full p-3 bg-gray-50"
        placeholder=""
        name="availability"
      />
    </div>
    <input
      type="submit"
      className="mt-5 w-full bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
      value="Actualizar producto"
    />
    {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
  </Form>
</>;
};

export default EditProduct;
