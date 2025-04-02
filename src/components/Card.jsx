import styles from "./Card.module.css";
import { ShopContext } from "../App";
import { useContext } from "react";

function Card() {
  const { products } = useContext(ShopContext);
  console.log(products[0].url);
  return (
    <div className={styles.cardContainer}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.card}>
            <img className={styles.img} src={product.url} alt="" />
            <h3>{product.name}</h3>
            <div className={styles.descriptionContainer}>
              <div>
                <p>Weight: 50g</p>
                <p className={styles.price}>{`$ ${product.price}`}</p>
              </div>
              <div className={styles.buttonContainer}>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
