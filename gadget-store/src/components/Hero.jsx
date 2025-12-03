import "../styles/hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      
      {/* LEFT SIDE */}
      <div className="hero-content">
        <h1 className="hero-title">
          Buy, Sell & Swap the Latest <span>Gadgets</span>
        </h1>

        <p className="hero-subtext">
          Your trusted marketplace for premium smartphones, laptops, and accessories.
          Fast, reliable, and 100% secure.
        </p>

        <Link to="/products" className="hero-btn">
          Explore Products
        </Link>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-image-container">
        <img src="/hero-gadget.jpg" alt="Gadget Showcase" className="hero-image" />
      </div>

    </section>
  );
}
