import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container pt-5 mt-5">
            <div className="row text-center" >
                <h1 className='' style={{ whiteSpace: 'nowrap', letterSpacing: '0.075rem', lineHeight: '3rem', fontSize: '2.8rem' }}>Zerodha Products</h1>
                <h2 className='fw-light' style={{ letterSpacing: '0.05rem', lineHeight: '3rem', fontSize: '1.25rem' }}>Sleek, modern, and intuitive trading platforms</h2>
                <p className='fw-lighter pb-5' style={{ letterSpacing: '0.05rem', lineHeight: '2rem' }}>
                    Check out our <Link to="/investments" style={{textDecoration:'none'}}>investment offerings</Link>
                    <i className="fa fa-long-arrow-right ms-1" aria-hidden="true" style={{color:'#0D6EFD'}}></i>
                </p>
                <hr className='mt-5 pt-5' style={{ opacity: '0.1' }} />
            </div>
        </div>
    );
}

export default Hero;