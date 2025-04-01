import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
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
          <Link to="shopPage">shop</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className={styles.number}>0</span>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
