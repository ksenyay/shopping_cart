import App from "./App";
import Main from "./components/Main";
import Nav from "./components/Nav";

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
];

export default routes;
