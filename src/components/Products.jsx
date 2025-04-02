import Card from "./Card";

const styles = {
  fontSize: "5.5em",
  textAlign: "start",
  marginLeft: "10px",
  marginTop: "50px",
};

function Products() {
  return (
    <div>
      <h1 style={styles}>PRODUCTS</h1>
      <Card />
    </div>
  );
}

export default Products;
