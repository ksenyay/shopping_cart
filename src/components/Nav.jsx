import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../App";

function Nav() {
  const { cartItems } = useContext(ShopContext);
  const [currentCount, setCurrentCount] = useState(0);

  function updateCartCount() {
    const itemCount = Object.values(cartItems).reduce(
      (a, item) => a + item.quantity,
      0
    );
    setCurrentCount(itemCount);
  }

  useEffect(() => {
    updateCartCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.logo} to="/">
            THE TEA
          </Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="products">shop</Link>
        </li>
        <li>
          <Link to="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className={styles.number}>{currentCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
