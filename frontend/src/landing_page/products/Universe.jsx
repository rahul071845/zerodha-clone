import React from 'react';

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h2 className='mb-4'>The Zerodha Universe</h2>
                <p className='fw-light'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 p-5">
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/zerodhaFundhouse.png" alt="" style={{ width: '85%' }} className='mx-auto d-block mb-3' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </a>
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/streakLogo.png" alt="" style={{ width: '70%' }} className='mx-auto d-block mb-3 pt-5' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </a>
                </div>
                <div className="col-3 p-5">
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/sensibullLogo.svg" alt="" style={{ width: '100%' }} className='mx-auto d-block mb-4' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </a>
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/smallcaseLogo.png" alt="" style={{ width: '90%' }} className='mx-auto d-block mb-4 pt-4' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </a>
                </div>
                <div className="col-3 p-5">
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/tijori.svg" alt="" style={{ width: '65%' }} className='mx-auto d-block mb-2' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </a>
                    <a className='text-decoration-none text-center'>
                        <img src="media/images/dittoLogo.png" alt="" style={{ width: '60%' }} className='mx-auto d-block mb-2 pt-5' />
                        <p style={{ fontSize: '0.75rem', color: 'gray', opacity: '0.7' }}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </a>
                </div>
            </div>
            <div className='text-center pb-5'>
                <button className='p-2 mt-1 mb-5 fs-5 btn btn-primary' style={{ width: '17%', margin: '0 auto' }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;