import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-3 mt-4 mb-4'>
            <div className="row text-center">
                <h2 className='mt-5 pb-3'>Open a Zerodha account</h2>
                <p className='fs-6 fw-light'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 mt-3 mb-5 fs-5 btn btn-primary' style={{ width: '17%', margin: '0 auto' }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;