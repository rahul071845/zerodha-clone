import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Funds.css";
import { fetchFunds, addFunds } from "../api/funds";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const loadFunds = async () => {
      const data = await fetchFunds();
      setFunds(data);
    };
    loadFunds();
  }, []);

  if (!funds) return <p>Loading funds...</p>;

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green" onClick={() => setShowModal(true)}>
          Add funds
        </Link>
        <Link
          className="btn btn-blue"
          onClick={() => setShowWithdrawModal(true)}
        >
          Withdraw
        </Link>
      </div>

      <div className="fund-row">
        <div className="fund-col">
          <span>
            <p>Equity</p>
          </span>
          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{funds.payin}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>{funds.span}</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>{funds.deliveryMargin}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>{funds.exposure}</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>{funds.optionsPremium}</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>{funds.collateralLiquid}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>{funds.collateralEquity}</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              {(
                Number(funds.collateralLiquid || 0) +
                Number(funds.collateralEquity || 0)
              ).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="fund-col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Add Funds</h4>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="modal-buttons">
              <button
                onClick={async () => {
                  const res = await addFunds(Number(amount));
                  if (res?.success) {
                    const updated = await fetchFunds();
                    setFunds(updated.fund);
                  }
                  setAmount("");
                  setShowModal(false);
                }}
              >
                Add
              </button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showWithdrawModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Withdraw Funds</h4>
            <input
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <div className="modal-buttons">
              <button
                onClick={async () => {
                  const res = await withdrawFunds(Number(withdrawAmount));
                  if (res?.success) {
                    const updated = await fetchFunds();
                    setFunds(updated.fund);
                  }
                  setWithdrawAmount("");
                  setShowWithdrawModal(false);
                }}
              >
                Withdraw
              </button>
              <button onClick={() => setShowWithdrawModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;
