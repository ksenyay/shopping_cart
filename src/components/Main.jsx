import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstSection}>
        <h1 className={styles.h1}>RELAX WITH VARIETY OF TEAS</h1>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus odit sed doloribus quaerat deleniti
          </p>
          <Link className={styles.span} to="shop">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className={styles.secondSection}>
        <img className={styles.image} src="./product_7.png" alt="" />
      </div>
    </div>
  );
}

export default Main;
