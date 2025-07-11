import "../styles/Summary.css";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getSummary } from "../api/summary";

const Summary = () => {
  const { user } = useAuth() || {};
  if (!user) return <p>Loading user info...</p>;
  const [summaryData, setSummaryData] = useState(null);
  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getSummary();
      setSummaryData(data);
    };
    fetchSummary();
  }, []);

  if (!summaryData) return <p>Loading summary...</p>;

  const {
    marginAvailable,
    marginsUsed,
    openingBalance,
    holdingsCount,
    profit,
    profitPercent,
    currentValue,
    investment,
    positionPnl,
    orderCount,
    lastOrderDate,
  } = summaryData;

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username || "User"}!</h6>
        <hr className="divider" />
      </div>
      {/* Equity Section */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>{marginAvailable}</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Margins used <span>{marginsUsed}</span>
            </p>
            <p>
              Opening balance <span>{openingBalance}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      {/* Holdings Section */}
      <div className="section">
        <span>
          <p>Holdings ({holdingsCount})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profit.startsWith("-") ? "loss" : "profit"}>
              {profit} <small>{profitPercent}</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Current Value <span>{currentValue}</span>
            </p>
            <p>
              Investment <span>{investment}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      {/* Position Section */}
      <div className="section">
        <span>
          <p>Positions</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className={positionPnl.startsWith("-") ? "loss" : "profit"}>
              {positionPnl}
            </h3>
            <p>Net P&L</p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      {/* Orders Section */}
      <div className="section">
        <span>
          <p>Orders</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>{orderCount}</h3>
            <p>Total Orders</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Last Order <span>{formatDate(lastOrderDate)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
