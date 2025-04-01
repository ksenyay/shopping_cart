import styles from "./Main.module.css";

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
          <span className={styles.span}>SHOP NOW</span>
        </div>
      </div>
      <div>
        <img className={styles.image} src="src/assets/tea.png" alt="" />
      </div>
    </div>
  );
}

export default Main;
