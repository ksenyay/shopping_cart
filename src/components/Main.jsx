import ImageSilder from "./ImageSlider";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function Main() {
  const slides = [
    { url: "/product_1.png" },
    { url: "/product_2.png" },
    { url: "/product_3.png" },
    { url: "/product_4.png" },
    { url: "/product_5.png" },
    { url: "/product_6.png" },
    { url: "/product_7.png" },
    { url: "/product_8.png" },
    { url: "/product_9.png" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstSection}>
        <h1 className={styles.h1}>RELAX WITH VARIETY OF TEAS</h1>
        <div className={styles.description}>
          <p>
            Discover our cozy tea shop offering premium blends from around the
            world. Experience warmth, quality, and the perfect cup for every
            taste.
          </p>
          <Link className={styles.span} to="products">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className={styles.secondSection}>
        <ImageSilder slides={slides} />
      </div>
    </div>
  );
}

export default Main;
