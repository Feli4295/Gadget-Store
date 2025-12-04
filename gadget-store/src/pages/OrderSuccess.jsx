import "../styles/ordersuccess.css";

export default function OrderSuccess() {
  return (
    <section className="success-section">
      <div className="success-box">
        <h1>🎉 Order Successful!</h1>
        <p>Your order has been placed successfully.</p>

       <Link to="/orders" className="success-btn">
  View Order History
</Link>

      </div>
    </section>
  );
}
