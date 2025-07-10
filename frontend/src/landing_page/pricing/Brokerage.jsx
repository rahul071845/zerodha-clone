import React from 'react';
import './Brokerage.css'; // Import the CSS file
import BrokerageHero from './BrokerageHero';

function Brokerage() {
    return (
        <div className="container">
            <BrokerageHero />
            <div className="row justify-content-center px-5 mx-5 brokerage-container">
                <h1 className='fs-4 mb-4 pb-3 brokerage-title'>Charges explained</h1>
                <div className="col-6">

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Securities/Commodities transaction tax</h2>
                        <p className='description-text'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p className='description-text'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Transaction/Turnover Charges</h2>
                        <p className='description-text'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className='description-text'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p className='description-text'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                        <p className='description-text'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                        <p className='description-text'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Call & trade</h2>
                        <p className='description-text'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Stamp charges</h2>
                        <p className='description-text'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>NRI brokerage charges</h2>
                        <ul className="charges-list">
                            <li className="list-item-text">₹100 per order for futures and options.</li>
                            <li className="list-item-text">For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li className="list-item-text">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li className="list-item-text">₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Account with debit balance</h2>
                        <p className='description-text'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h2>
                        <ul className="charges-list">
                            <li className="list-item-text">Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li className="list-item-text">Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li className="list-item-text">Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Margin Trading Facility (MTF)</h2>
                        <ul className="charges-list">
                            <li className="list-item-text"><span className="bold-text">MTF Interest:</span> 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li className="list-item-text"><span className="bold-text">MTF Brokerage:</span> 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li className="list-item-text"><span className="bold-text">MTF pledge charge:</span> ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>
                    </div>

                </div>
                <div className="col-6">
                    <div className="section-container">
                        <h2 className='fs-6 section-title'>GST</h2>
                        <p className='description-text'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>SEBI Charges</h2>
                        <p className='description-text'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>DP (Depository participant) charges</h2>
                        <p className='description-text'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className='description-text'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className='description-text'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Pledging charges</h2>
                        <p className='description-text'>₹30 + GST per pledge request per ISIN.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>AMC (Account maintenance charges)</h2>
                        <p className='description-text'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href='#' className="brokerage-link">Click here</a></p>
                        <p className='description-text'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='#' className="brokerage-link">Click here</a></p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Corporate action order charges</h2>
                        <p className='description-text'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Off-market transfer charges</h2>
                        <p className='description-text'>₹25 per transaction.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Physical CMR request</h2>
                        <p className='description-text'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Payment gateway charges</h2>
                        <p className='description-text'>₹9 + GST (Not levied on transfers done via UPI)</p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Delayed Payment Charges</h2>
                        <p className='description-text'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href='#' className="brokerage-link">Learn more.</a></p>
                    </div>

                    <div className="section-container">
                        <h2 className='fs-6 section-title'>Trading using 3-in-1 account with block functionality</h2>
                        <ul className="charges-list">
                            <li className="list-item-text"><span className="bold-text">Delivery & MTF Brokerage:</span> 0.5% per executed order.</li>
                            <li className="list-item-text"><span className="bold-text">Intraday Brokerage:</span> 0.05% per executed order.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row px-5 pb-4 mx-5 brokerage-container">
                <h2 className='fs-6 section-title'>Disclaimer</h2>
                <p className='description-text'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
    );
}

export default Brokerage;