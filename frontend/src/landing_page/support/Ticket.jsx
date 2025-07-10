import React from 'react';

function Ticket() {
    return (
        <div className="container">
            <h5 className='ps-5 ms-5 fw-light mt-5' style={{ color: 'gray' }}>To create a ticket, select a relevant topic</h5>
            <div className="row justify-content-center px-5 m-5">
                <div className="col-4">
                    <i className="fa fa-plus-circle fa-lg me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Account Opening</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Resident individual</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Minor</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Non Resident Indian (NRI)</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Company, Partnership, HUF and LLP</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Glossary</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <i className="fa fa-user-o me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Your Zerodha Account</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Your Profile</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Account modification</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Nomination</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Transfer and conversion of securities</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <i className="fa fa-bar-chart me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Kite</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>IPO</a></li>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Trading FAQs</a></li>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Margin Trading Facility (MTF) and Margins</a></li>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Charts and orders</a></li>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Alerts and Nudges</a></li>
                        <li className='mb-2 lh-lq'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>General</a></li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center px-5 pb-5 m-5">
                <div className="col-4">
                    <i className="fa fa-credit-card me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Funds</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Add money</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Withdraw money</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Add bank accounts</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>eMandates</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <i className="fa fa-user-circle fa-rotate-270 me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Console</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Portfolio</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Corporate actions</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Funds statement</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Reports</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Profile</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Segments</a></li>
                    </ul>
                </div>
                <div className="col-4 pb-5 mb-3">
                    <i className="fa fa-money me-2" aria-hidden="true"></i>
                    <span className="fw-light" style={{ fontSize: '1.1rem', letterSpacing: '0.01rem' }}>Coin</span>
                    <ul className='pt-4' style={{ listStyle: 'none' }}>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Mutual funds</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>National Pension Scheme (NPS)</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Features on Coin</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>Payments and Orders</a></li>
                        <li className='mb-2 lh-lg'><a href='' className='fw-light ' style={{textDecoration:'none', fontSize:'0.9rem'}}>General</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Ticket;