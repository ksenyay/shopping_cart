import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.logo}>THE TEA</li>
        <li>home</li>
        <li>shop</li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className={styles.number}>0</span>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
