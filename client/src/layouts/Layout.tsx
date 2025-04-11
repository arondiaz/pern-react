import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-gray-700">
        <div className="mx-auto max-w-4xl p-10">
          <h1 className="text-4xl font-bold text-white">
            Administrador de stock de productos
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-4xl p-10 shadow bg-white">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
