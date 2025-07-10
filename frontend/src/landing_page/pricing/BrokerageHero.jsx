import React from "react";
import { useState } from "react";

function BrokerageHero() {
  const [selectedOption, setSelectedOption] = useState("Equity");

  const tableData = {
    Equity: [
      {
        start: "Brokerage",
        delivery: "Zero Brokerage",
        intraday: "0.03% or Rs. 20/executed order whichever is lower",
        futures: "0.03% or Rs. 20/executed order whichever is lower",
        options: "Flat Rs. 20 per executed order",
      },
      {
        start: "STT/CTT",
        delivery: "0.1% on buy & sell",
        intraday: "0.025% on the sell side",
        futures: "0.02% on the sell side",
        options:
          "0.125% of the intrinsic value on options that are bought and exercised, 0.1% on sell side (on premium)",
      },
      {
        start: "Transaction charges",
        delivery: "NSE: 0.00297%, BSE: 0.00375%",
        intraday: "NSE: 0.00297%, BSE: 0.00375%",
        futures: "NSE: 0.00173%, BSE: 0",
        options: "NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)",
      },
      {
        start: "GST",
        delivery: "18% on (brokerage + SEBI charges + transaction charges)",
        intraday: "18% on (brokerage + SEBI charges + transaction charges)",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        start: "SEBI charges",
        delivery: "₹10 / crore",
        intraday: "₹10 / crore",
        futures: "₹10 / crore",
        options: "₹10 / crore",
      },
      {
        start: "Stamp charges",
        delivery: "0.015% or ₹1500 / crore on buy side",
        intraday: "0.003% or ₹300 / crore on buy side",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "0.003% or ₹300 / crore on buy side",
      },
    ],
    Currency: [
      {
        start: "Brokerage",
        futures: "0.03% or ₹ 20/executed order whichever is lower",
        options: "₹ 20/executed order",
      },
      { start: "STT/CTT", futures: "No STT", options: "No STT" },
      {
        start: "Transaction charges",
        futures: "NSE: 0.00035%, BSE: 0.00045%",
        options: "NSE: 0.00035%, BSE: 0.00045%",
      },
      {
        start: "GST",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      { start: "SEBI charges", futures: "₹10 / crore", options: "₹10 / crore" },
      {
        start: "Stamp charges",
        futures: "0.0001% or ₹10 / crore on buy side",
        options: "0.0001% or ₹10 / crore on buy side",
      },
    ],
    Commodity: [
      {
        start: "Brokerage",
        futures: "0.03% or ₹ 20/executed order whichever is lower",
        options: "₹ 20/executed order",
      },
      {
        start: "STT/CTT",
        futures: "0.01% on sell side (Non-Agri)",
        options: "0.05% on sell side",
      },
      {
        start: "Transaction charges",
        futures: "MCX: 0.0021%, NSE: 0.0001%",
        options: "MCX: 0.0418%, NSE: 0.0001%",
      },
      {
        start: "GST",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        start: "SEBI charges",
        futures: "Agri: ₹1 / crore, Non-agri: ₹10 / crore",
        options: "₹10 / crore",
      },
      {
        start: "Stamp charges",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "0.003% or ₹300 / crore on buy side",
      },
    ],
  };

  const getTableHeaders = () => {
    switch (selectedOption) {
      case "Equity":
        return [
          "",
          "Equity delivery",
          "Equity intraday",
          "	F&O - Futures",
          "F&O - Options",
        ];
      case "Currency":
        return ["", "Currency futures", "Currency options"];
      case "Commodity":
        return ["", "Commodity futures", "Commodity options"];
      default:
        return [];
    }
  };

  const getTableRow = (item) => {
    switch (selectedOption) {
      case "Equity":
        return [
          item.start,
          item.delivery,
          item.intraday,
          item.futures,
          item.options,
        ];
      case "Currency":
        return [item.start, item.futures, item.options];
      case "Commodity":
        return [item.start, item.futures, item.options];
      default:
        return [];
    }
  };

  return (
    <>
      <div className="row mx-5 px-5">
        <div className="btn-group border-bottom">
          {["Equity", "Currency", "Commodity"].map((option) => (
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "1.5rem",
                width: "15%",
                paddingBottom: "0.8rem",
                borderBottom: selectedOption === option ? '2px solid #0d6efd' : 'none',
                color: selectedOption === option ? '#0d6efd' : '#0d6efd'
              }}
              key={option}
              onClick={() => setSelectedOption(option)}
              className={selectedOption === option ? "active text-muted" : ""}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="row mx-5 my-4 px-5">
        <table
          className="table table-borderless"
          style={{ border: "1px solid #ddd" }}
        >
          <thead className="border">
            <tr>
              {getTableHeaders().map((header, idx) => (
                <th
                  key={idx}
                  className="p-3"
                  scope="col"
                  style={{
                    fontWeight: "450",
                    fontSize: "0.9rem",
                    letterSpacing: "0.03rem",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData[selectedOption].map((item, idx) => (
              <tr key={idx}>
                {getTableRow(item).map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="text-muted p-3"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h5 className="text-center mb-4" style={{ fontWeight: "300" }}>
        <a href="" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h5>
    </>
  );
}

export default BrokerageHero;
