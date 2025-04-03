import { useContext, useState } from "react";
import styles from "./Cart.module.css";
import { ShopContext } from "../App";

function Cart() {
  const { cartItems } = useContext(ShopContext);

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

  return (
    <>
      <div className={styles.cart}>
        <h2>MY CART</h2>
        {cartItems.length === 0 ? (
          <p>The cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartContainer}>
                <div className={styles.cartItem}>
                  <img className={styles.image} src={item.url} alt="" />
                </div>
                <div className={styles.cartItemTwo}>
                  <p>{item.name}</p>
                  <p>Weight: 100g</p>
                  <button>Remove</button>
                </div>
                <div className={styles.cartItemThree}>
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
                    <p>$ {item.price}</p>
                  </div>
                </div>
              </div>
            ))}

            <button className={styles.checkout}>CONTINUE TO CHECKOUT</button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
