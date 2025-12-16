import { useOrders } from "../hooks/useOrders";
import "../styles/order.css";

export default function OrderHistory() {
  const { orders } = useOrders();

  if (!orders) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        OrderContext fail to load.
      </h2>
    );
  }

  return (
    <section className="history-section">
      <h2>Your Orders</h2>

      <div className="history-list">
        {orders.map((order) => (
          <div className="history-card" key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> ₦{order.total.toLocaleString()}
            </p>

            <div className="history-items">
              {order.items.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.qty}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
