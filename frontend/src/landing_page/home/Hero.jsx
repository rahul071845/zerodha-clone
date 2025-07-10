import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mt-5 mb-4'>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-4' style={{width:'72%', margin:'0 auto'}}/>
                <h1 className='mt-5' style={{fontSize:'3rem'}}>Invest in everything</h1>
                <p className='fs-5 fw-light'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 mt-4 mb-5 fs-5 btn btn-primary' style={{width:'17%', margin:'0 auto'}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;