import { Link } from "react-router-dom";

const divStyle = {
  fontSize: "2em",
  marginTop: "200px",
};

const buttonStyle = {
  fontSize: "0.6em",
  marginTop: "100px",
  textDecoration: "underline",
};

function NotFoundPage() {
  return (
    <div style={divStyle}>
      <div>404 Not Found</div>
      <Link style={buttonStyle} to="/">
        Return Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
