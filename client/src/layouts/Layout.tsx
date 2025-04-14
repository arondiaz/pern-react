import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-gray-700">
        <div className="mx-auto max-w-4xl p-10">
          <h1 className="text-4xl font-bold text-white">
            Administrador de stock de productos
          </h1>
        </div>
        <ul className="flex justify-center gap-5 text-white text-lg pb-4 ">
          <Link to={"/"}>
            {" "}
            <li className="hover:text-amber-200">Inicio</li>
          </Link>
          <Link to={"productos/nuevo"}>
            <li className="hover:text-amber-200">Agregar producto</li>
          </Link>
        </ul>
      </header>

      <main className="mt-10 mx-auto max-w-4xl p-10 shadow bg-white">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
