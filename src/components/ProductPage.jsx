import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../App";
import { useContext, useState } from "react";

function ProductPage() {
  const [count, setCount] = useState(1);

  function decrementCount() {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const { products } = useContext(ShopContext);
  const params = useParams();

  const currentProduct = products.filter(
    (product) =>
      product.name.replaceAll(" ", "_").toLowerCase() === params.productName
  );
  const product = currentProduct[0];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.elementContainer}>
          <img className={styles.image} src={product.url} alt="" />
        </div>
        <div className={styles.elementContainer}>
          <h2>{product.name}</h2>
          <p>
            <b>Type:</b>{" "}
            {product.type
              ? product.type
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")
              : "Pu Erh"}
          </p>
          <p>
            <b>Weight:</b> 100g
          </p>
          <p className={styles.price}>$ {product.price}</p>
          <p>{product.description}</p>
          <div className={styles.qty}>
            <button
              onClick={() => decrementCount()}
              className={styles.qtyButton}
            >
              -
            </button>
            <span className={styles.count}>{count}</span>
            <button
              onClick={() => incrementCount()}
              className={styles.qtyButton}
            >
              +
            </button>
          </div>
          <button className={styles.button}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
