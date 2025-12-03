import "../styles/ProductPage.css";
import ProductSection from "../components/ProductSection";

export default function ProductPage() {
  return (
    <div className="products-page">

      {/* HEADER / HERO */}
      <header className="products-hero">
        <div className="products-hero-content">
          <h1>Explore Our Latest <span>Products</span></h1>
          <p>Discover premium gadgets at unbeatable prices. Quality guaranteed.</p>

          <button className="hero-btn">
            Browse Featured Gadgets
          </button>
        </div>
      </header>

      {/* PRODUCT GRID */}
      <ProductSection />
    </div>
  );
}
