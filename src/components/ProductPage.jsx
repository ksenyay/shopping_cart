import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../App";
import { useContext } from "react";

function ProductPage() {
  const { products } = useContext(ShopContext);
  const params = useParams();
  const currentProduct = products.filter(
    (product) =>
      product.name.replaceAll(" ", "_").toLowerCase() === params.productName
  );
  const product = currentProduct[0];
  console.log(currentProduct);
  return (
    <>
      <h1>
        {product.type ? product.name + " - " + product.type : product.name}
      </h1>
    </>
  );
}

export default ProductPage;
