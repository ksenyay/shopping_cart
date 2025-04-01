import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
