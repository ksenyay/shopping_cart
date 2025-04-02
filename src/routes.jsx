import App from "./App";
import Main from "./components/Main";

import Card from "./components/Card";
import Cart from "./components/Cart";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productName",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
