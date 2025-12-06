import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useOrders } from "../hooks/useOrders";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {
    if (cart.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      const newOrder = {
        id: Date.now(),
        items: cart,
        total,
        date: new Date().toLocaleString(),
        status: "Pending",
      };

      addOrder(newOrder);

      setCart([]);
      localStorage.removeItem("cart");

      setLoading(false);
      navigate("/success");
    }, 2000);
  };

  if (loading) return <Loader />;

  return (
    <section className="checkout-section">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-container">
        <div className="summary-box">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div className="summary-item" key={item.id}>
              <p className="sum-name">{item.name}</p>
              <p className="sum-price">
                ₦{(item.price * item.qty).toLocaleString()}
              </p>
            </div>
          ))}

          <hr />

          <div className="summary-total">
            <h4>Total</h4>
            <h4>₦{total.toLocaleString()}</h4>
          </div>
        </div>

        <div className="payment-box">
          <h3>Select Payment Method</h3>

          <div className="payment-options">
            <label className="payment-option">
              <input type="radio" name="payment" defaultChecked />
              <span>Pay on Delivery</span>
            </label>
          </div>

          <button className="place-order-btn" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
