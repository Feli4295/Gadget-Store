import "../styles/ordersuccess.css";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <section className="success-section">
      <div className="success-box">
        <h1>🎉 Order Successful!</h1>
        <p>Your order has been placed successfully.</p>

        <Link to="/orderHistory" className="success-btn">
          View Order History
        </Link>
      </div>
    </section>
  );
}
