import "../styles/products.css";
import { Link } from "react-router-dom";

const productData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "₦720,000",
    img: "https://cdn.pixabay.com/photo/2022/09/22/10/23/iphone-7472231_1280.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: "₦510,000",
    img: "https://cdn.pixabay.com/photo/2022/04/29/09/56/smartphone-7165150_1280.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    price: "₦180,000",
    img: "https://cdn.pixabay.com/photo/2019/11/26/05/52/headphones-4657037_1280.jpg",
  },
  {
    id: 4,
    name: "MacBook Pro M1",
    price: "₦1,100,000",
    img: "https://cdn.pixabay.com/photo/2018/05/01/13/46/laptop-3363736_1280.jpg",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="products-section">
      <h2 className="products-title">
        Featured <span>Gadgets</span>
      </h2>

      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
            </div>

            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>

            <Link to={`/product/${product.id}`} className="btn product-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
