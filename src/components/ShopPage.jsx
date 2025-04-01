import Card from "./Card";

const styles = {
  fontSize: "5.5em",
  textAlign: "start",
  marginLeft: "10px",
};

function ShopPage() {
  return (
    <>
      <h1 style={styles}>PRODUCTS</h1>
      <Card />
    </>
  );
}

export default ShopPage;
