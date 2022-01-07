import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className="Header-button" to="/">
        {" "}
        Go Home
      </Link>
    </header>
  );
};

export default Header;
