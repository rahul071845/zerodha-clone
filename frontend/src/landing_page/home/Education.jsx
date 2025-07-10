import React from 'react';

function Education() {
    return ( 
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-4 offset-1">
                    <img src="media/images/education.svg" alt="" style={{width: '100%'}}/>
                </div>
                <div className="col-5 offset-1">
                    <h2 className="mb-2 lh-lg">Free and open market education</h2>
                    <p className="fw-light lh-lg">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="text-decoration-none">
                        Varsity
                        <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                    <p className="fw-light lh-lg mt-4">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="#" className="text-decoration-none">
                        TradingQ&A
                        <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;