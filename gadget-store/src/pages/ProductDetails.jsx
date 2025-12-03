import { useParams } from "react-router-dom";
import "../styles/productDetails.css";

import productData from "../data/product"; 

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  if (!product) return <h2 className="not-found">Product not found</h2>;

  return (
    <section className="details-section">

      <div className="details-container">

        {/* LEFT IMAGE */}
        <div className="details-image-wrapper">
          <img src={product.img} alt={product.name} className="details-image" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-info">

          <h1 className="details-title">{product.name}</h1>
          

          <p className="details-price">{product.price}</p>

          <p className="details-description">
            This is a premium-quality product designed to deliver excellent performance
            and durability. Explore all features, enjoy smooth usage, and experience
            top-tier quality built for modern users.
          </p>

          <button className="btn details-btn">Add to Cart</button>
        </div>
      </div>

    </section>
  );
}
