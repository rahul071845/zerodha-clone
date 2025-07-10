import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center p-5 m-5">
                <h1 className='tex'>Charges</h1>
                <p className='fs-5 text-muted' style={{opacity:'0.7'}}>List of all charges and taxes</p>
            </div>
            <div className="row p-5 m-5">
                <div className="col text-center">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:'70%'}}/>
                    <h3 className='my-4'>Free equity delivery</h3>
                    <p className='fw-light' style={{color:'gray'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col text-center">
                    <img src="media/images/intradayTrades.svg" alt="" style={{width:'70%'}}/>
                    <h3 className='my-4'>Intraday and F&O trades</h3>
                    <p className='fw-light' style={{color:'gray'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col text-center">
                    <img src="media/images/pricingMF.svg" alt="" style={{width:'70%'}}/>
                    <h3 className='my-4'>Free direct MF</h3>
                    <p className='fw-light' style={{color:'gray'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;