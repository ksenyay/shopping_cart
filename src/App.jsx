import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      name: "LONGJING",
      type: "GREEN TEA",
      description:
        "A popular Chinese green tea known for its delicate taste and refreshing flavor, perfect for a soothing break.",
      id: "1",
      price: 15.0,
      url: "/product_1.png",
    },
    {
      name: "BI LUO CHUN",
      type: "GREEN TEA",
      description:
        "This green tea has a sweet, fruity fragrance and smooth, fresh taste, offering a delightful and aromatic experience.",
      id: "2",
      price: 18.0,
      url: "/product_2.png",
    },
    {
      name: "SHENG PU ERH",
      type: "",
      description:
        "A fermented Chinese tea with a rich, earthy flavor, prized for its ability to improve with age and promote digestion.",
      id: "3",
      price: 20.0,
      url: "/product_3.png",
    },
    {
      name: "SHOU PU ERH",
      type: "",
      description:
        "A dark, earthy tea with a robust, smooth flavor, often aged to enhance its richness and mellow complexity.",
      id: "4",
      price: 22.0,
      url: "/product_4.png",
    },
    {
      name: "TIEGUANYIN",
      type: "OOLONG",
      description:
        "A floral, lightly roasted oolong tea with a smooth taste, offering a balanced blend of sweetness and floral notes.",
      id: "5",
      price: 17.0,
      url: "/product_5.png",
    },
    {
      name: "DA HONG PAO",
      type: "OOLONG",
      description:
        "Known as the 'King of Oolongs,' this tea has a rich, roasted flavor with hints of stone fruit and a lingering sweet aftertaste.",
      id: "6",
      price: 25.0,
      url: "/product_6.png",
    },
    {
      name: "BAIHAO YINZHEN",
      type: "WHITE TEA",
      description:
        "A premium white tea with a light, sweet flavor and delicate aroma, offering a refreshing and pure taste.",
      id: "7",
      price: 30.0,
      url: "/product_7.png",
    },
    {
      name: "BAI MUDAN",
      type: "WHITE TEA",
      description:
        "Also known as White Peony, this tea is light and fragrant with a mellow flavor and a subtle sweetness.",
      id: "8",
      price: 22.0,
      url: "/product_8.png",
    },
    {
      name: "LAPSANG SOUCHONG",
      type: "RED TEA",
      description:
        "A bold, smoky tea with a rich, woodsy flavor, often enjoyed by those who appreciate strong, unique tastes.",
      id: "9",
      price: 18.0,
      url: "/product_9.png",
    },
  ];

  const addToCart = (product) => {
    setCartItems((prevProduct) => [...prevProduct, product]);
  };

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      <Nav />
      <Outlet />
    </ShopContext.Provider>
  );
}

export default App;
