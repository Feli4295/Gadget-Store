import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // CART CONTEXT
  const { cart } = useContext(CartContext);

  // COUNT TOTAL ITEMS
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo">
          <h2>
            Chuks<span>Gadget</span>
          </h2>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>

          {/* MOBILE CART ICON */}
          <li className="mobile-cart">
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              🛒
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </Link>
          </li>
        </ul>

        {/* RIGHT-SIDE CART + BURGER */}
        <div className="nav-right">

          {/* DESKTOP CART ICON */}
          <Link to="/cart" className="cart-icon-desktop">
            🛒
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </Link>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
}
