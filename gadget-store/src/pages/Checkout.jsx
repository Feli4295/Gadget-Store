import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <section className="checkout-section">
      <h2 className="checkout-title">
        Checkout <span>Summary</span>
      </h2>

      <div className="checkout-wrapper">

        {/* LEFT SIDE — FORM */}
        <div className="checkout-form">

          <h3 className="section-head">Customer Information</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
          />

          <h3 className="section-head">Payment Method</h3>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={formData.payment === "card"}
                onChange={handleChange}
              />
              Card Payment
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="delivery"
                checked={formData.payment === "delivery"}
                onChange={handleChange}
              />
              Pay on Delivery
            </label>
          </div>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="order-summary">
          <h3 className="section-head">Order Summary</h3>

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.img} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p className="summary-price">
                    ₦{(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}

          <div className="summary-total">
            <h3>Total:</h3>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
