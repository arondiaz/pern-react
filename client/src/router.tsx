import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import { loader as productsLoader } from "./loaders/getProductsLoader";
import { action as updatedAvailabilityAction } from "./actions/updateProductAvailabilityAction";
import NewProduct from "./views/NewProduct";
import { action as addProductAction } from "./actions/addProductAction";
import EditProduct from "./views/EditProduct";
import { loader as getProductByIdLoader } from "./loaders/getProductByIdLoader";
import { action as updateProductAction } from "./actions/updateProductAction";
import { action as deleteProductAction } from "./actions/deleteProductByIdAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updatedAvailabilityAction,
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: addProductAction,
      },
      {
        path: "producto/:id/editar",
        element: <EditProduct />,
        loader: getProductByIdLoader,
        action: updateProductAction,
      },
      {
        path: "producto/:id/eliminar",
        action: deleteProductAction,
      },
    ],
  },
]);
