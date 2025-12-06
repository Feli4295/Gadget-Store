import Hero from "../components/Hero";
import "../styles/home.css";
import { Link } from "react-router-dom";

import Gadget5 from "../assets/images/Gadget5.jpg";
import Gadget1 from "../assets/images/Gadget 1.jpg";
import Gadget9 from "../assets/images/Gadget 9.jpg";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <Hero />

      {/* FEATURED PRODUCTS */}
      <section className="featured-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src={Gadget5} alt="Phone" />
            <h3>Smartphone Pro X</h3>
            <p>₦210,000</p>
            <Link to="/products" className="btn">View</Link>
          </div>

          <div className="product-card">
            <img src={Gadget1} alt="Laptop" />
            <h3>Laptop Ultra 14"</h3>
            <p>₦430,000</p>
            <Link to="/products" className="btn">View</Link>
          </div>

          <div className="product-card">
            <img src={Gadget9} alt="Headphones" />
            <h3>Noise-Cancel Headphones</h3>
            <p>₦35,000</p>
            <Link to="/products" className="btn">View</Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Sell Your Gadgets Easily</h2>
        <p>
          We buy smartphones, laptops, and accessories at the best prices. 
          Fast payment. No stress.
        </p>
        <Link to="/contact" className="cta-btn">Contact Us</Link>
      </section>

    </div>
  );
}
