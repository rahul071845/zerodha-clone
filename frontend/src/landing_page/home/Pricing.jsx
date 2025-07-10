import React from 'react';

function Pricing() {
    return (
        <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-4 offset-1">
                    <h2 className="mb-2 lh-lg">Unbeatable pricing</h2>
                    <p className="fw-light lh-lg">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none">
                        See pricing
                        <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                </div>

                <div className="col-6 ps-3 pt-5">
                    <div className="row text-start pt-2">
                        <div className="col d-flex align-items-center mb-3">
                            <img
                                src="media/images/pricing0.svg"
                                alt="Free account opening"
                                style={{ width: '65%'}}
                            />
                            <p className="mt-4 mb-0 position-relative" style={{whiteSpace:'nowrap', fontSize:'0.6rem', opacity:'0.6', left:"-1.3rem"}}>Free account<br/>opening</p>
                        </div>
                        <div className="col d-flex align-items-center mb-3 me-5">
                            <img
                                src="media/images/pricing0.svg"
                                alt="Free equity delivery and direct mutual funds"
                                style={{ width: '65%'}}
                            />
                            <p className="mt-4 mb-0 position-relative" style={{whiteSpace:'nowrap', fontSize:'0.6rem', opacity:'0.6', left:"-1.3rem"}}>Free equity delivery<br/>and direct mutual funds</p>
                        </div>
                        <div className="col d-flex align-items-center mb-3">
                            <img
                                src="media/images/pricing20.svg"
                                alt="Intraday and F&O"
                                style={{width: '65%', marginLeft: '0.5rem'}}
                            />
                            <p className="mt-4 mb-0 position-relative" style={{whiteSpace:'nowrap', fontSize:'0.6rem', opacity:'0.6'}}>Intraday and<br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
