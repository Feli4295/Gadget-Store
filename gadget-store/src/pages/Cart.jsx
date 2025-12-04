import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="cart-section">
      <h2 className="cart-title">
        Your <span>Cart</span>
      </h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-image" />

              <div className="cart-info">
                <h3 className="cart-name">{item.name}</h3>
                <p className="cart-price">₦{item.price.toLocaleString()}</p>

                <div className="qty-control">
                  <button onClick={() => updateQuantity(item.id, item.qty - 1)}>
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL & CHECKOUT */}
          <div className="cart-summary">
            <h3>
              Total: <span>₦{totalPrice.toLocaleString()}</span>
            </h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")} 
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
