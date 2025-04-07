import Card from "./Card";
import styles from "./Products.module.css";

function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>PRODUCTS</h1>
      <Card />
    </div>
  );
}

export default Products;
