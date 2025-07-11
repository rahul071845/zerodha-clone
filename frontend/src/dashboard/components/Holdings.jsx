import React, { useState, useEffect } from "react";
import "../styles/Holdings.css";
import { fetchHoldings } from "../api/holding";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const loadHoldings = async () => {
      const data = await fetchHoldings();
      setHoldings(data);
    };
    loadHoldings();
  }, []);

  const totalInvestment = holdings.reduce(
    (acc, item) => acc + item.qty * item.avg,
    0
  );
  const currentValue = holdings.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment
    ? ((pnl / totalInvestment) * 100).toFixed(2)
    : "0.00";
  const pnlClass = pnl >= 0 ? "profit" : "loss";

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, idx) => {
              const currVal = stock.qty * stock.price;
              const isProfit = currVal - stock.avg * stock.qty > 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isProfit ? "profit" : "loss";
              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="hold-row">
        <div className="hold-col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="hold-col">
          <h5>
            {currentValue.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="hold-col">
          <h5 className={pnlClass}>
            {pnl.toFixed(2)} ({pnlPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
