import { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, incrementCount, decrementCount } =
    useContext(ShopContext);

  const [totalPrice, setTotalPrice] = useState(0);

  function decrement(product) {
    if (product.quantity === 1) {
      return;
    }
    decrementCount(product);
  }

  function increment(product) {
    incrementCount(product);
  }

  function calculateTotal() {
    const total = cartItems.reduce(
      (a, item) => a + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

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
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
                <div className={styles.cartItemThree}>
                  <div className={styles.qty}>
                    <button
                      onClick={() => decrement(item)}
                      className={styles.qtyButton}
                    >
                      -
                    </button>
                    <span className={styles.count}>{item.quantity}</span>
                    <button
                      onClick={() => increment(item)}
                      className={styles.qtyButton}
                    >
                      +
                    </button>
                    <p>$ {item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <p className={styles.total}>
              <b>Total: </b>$ {totalPrice}
            </p>

            <button className={styles.checkout}>CONTINUE TO CHECKOUT</button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
