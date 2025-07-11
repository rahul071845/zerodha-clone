import { useState, useEffect } from "react";
import "../styles/Positions.css";
import { fetchPositions } from "../api/position";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPositions = async () => {
      try {
        setLoading(true);
        const data = await fetchPositions();
        setPositions(data);
      } catch (err) {
        setError("Failed to load positions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPositions();
  }, []);

  if (loading) return <div className="loading">Loading positions...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>
      {positions.length === 0 ? (
        <div className="empty-state">No positions found</div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((stock, idx) => {
                const currVal = stock.qty * stock.price;
                const isProfit = currVal - stock.avg * stock.qty > 0;
                const profitClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isProfit ? "profit" : "loss";

                return (
                  <tr key={idx}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profitClass}>
                      {(currVal - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;
