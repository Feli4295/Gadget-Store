import { useParams } from "react-router-dom";
import "../styles/productDetails.css";

import productData from "../data/product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productData.find((item) => item.id === Number(id));

  if (!product) return <h2 className="not-found">Product not found</h2>;

  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to Cart!");
  };

  return (
    <section className="details-section">
      <div className="details-container">
        <div className="details-image-wrapper">
          <img src={product.img} alt={product.name} className="details-image" />
        </div>

        <div className="details-info">
          <h1 className="details-title">{product.name}</h1>

          <p className="details-price">{product.price}</p>

          <p className="details-description">
            This is a premium-quality product designed to deliver excellent performance
            and durability. Explore all features, enjoy smooth usage, and experience
            top-tier quality built for modern users.
          </p>

          <button className="btn details-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
