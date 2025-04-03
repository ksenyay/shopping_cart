import styles from "./Card.module.css";
import { ShopContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Card() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div className={styles.cardContainer}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.card}>
            <Link
              to={`/products/${product.name
                .replaceAll(" ", "_")
                .toLowerCase()}`}
            >
              <img className={styles.img} src={product.url} alt="" />
            </Link>
            <h3>
              {product.type
                ? product.name + " - " + product.type
                : product.name}
            </h3>
            <div className={styles.descriptionContainer}>
              <div>
                <p>Weight: 50g</p>
                <p className={styles.price}>{`$ ${product.price}`}</p>
              </div>
              <div className={styles.buttonContainer}>
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
