import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
