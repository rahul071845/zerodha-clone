import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BuyActionWindow.css";
import { GeneralContext } from "./GeneralContext";
import axios from "axios";

function BuyActionWindow({ uid }) {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const [stockQty, setStockQty] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
      name: uid,
      qty: stockQty,
      price: stockPrice,
      mode: "BUY"
    });
    closeBuyWindow();
  };

  return (
    <div className={`container ${active ? "active" : ""}`} id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQty(e.target.value)}
              value={stockQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="inputs">
        <span>Margin required 140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
          <Link to="" className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
