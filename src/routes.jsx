import App from "./App";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Card from "./components/Card";
import ShopPage from "./components/ShopPage";
import ProductPage from "./components/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "main",
    element: <Main />,
  },
  {
    path: "nav",
    element: <Nav />,
  },
  {
    path: "card",
    element: <Card />,
  },
  {
    path: "shopPage",
    element: <ShopPage />,
  },
  {
    path: "productPage",
    element: <ProductPage />,
  },
];

export default routes;
