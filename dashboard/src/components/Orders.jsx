import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../api/order";
import "../styles/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.mode.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return (
      <div className="orders-loading">
        <div className="spinner"></div>
        <p>Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h3>Orders ({orders.length})</h3>
        <div className="orders-controls">
          <div className="filter-tabs">
            {["all", "buy", "sell"].map((type) => (
              <button
                key={type}
                className={`filter-tab ${filter === type ? "active" : ""}`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="orders-empty">
          <div className="empty-state">
            <h3>No orders found</h3>
            <p>
              You haven't placed any{" "}
              {filter !== "all" ? filter.toLowerCase() : ""} orders yet.
            </p>
            <Link to="/" className="btn-primary">
              Start Trading
            </Link>
          </div>
        </div>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, idx) => (
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td style={{ color: "#64748b" }}>
                    ₹{order.price.toLocaleString("en-IN")}
                  </td>
                  <td>
                    <span className="order-mode">{order.mode}</span>
                  </td>
                  <td>
                    <div className="order-time">
                      <div>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                      <div className="time">
                        {new Date(order.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
