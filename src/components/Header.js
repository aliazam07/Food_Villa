import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  const isOnline = useOnline();
  
  
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
            <Link className="nav-link" to="/instamart">
              Instamart
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              Cart- {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
      <h1 data-testid="online">{isOnline ? "✅" : "🔴"}</h1>
      <h1 className="font-bold text-xl mt-5"></h1>
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
