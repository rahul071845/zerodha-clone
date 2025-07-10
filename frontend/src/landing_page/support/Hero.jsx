import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div style={{ backgroundColor: '#387ed1' }}>
            <div className="container p-5">
                <div className="row justify-content-evenly ">
                    <div className="col-5">
                        <Link to='/support' style={{ textDecoration: 'none', color: 'white', fontSize: '1.25rem', letterSpacing: '.05rem' }}>Support Portal</Link>
                    </div>
                    <div className="col-5 align-self-center text-end">
                        <a href="" className='fw-light' style={{ color: 'white', letterSpacing: '.05rem', borderBottom: '1px solid white', paddingBottom: '4px', textDecoration: 'none' }}>Track tickets</a>
                    </div>
                </div>
                <div className="row justify-content-evenly py-5">
                    <div className="col-6 ms-1">
                        <h4 className='fw-light' style={{ color: 'white', letterSpacing: '0.05rem', fontSize: '1.3rem', lineHeight: '2rem' }}>Search for an answer or browse help topics to create a ticket</h4>
                        <div className='input-group py-4'>
                            <input id="search-text" type="text" className="form-control p-3" autocomplete="off" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." autofocus="">
                            </input>
                            <span className='input-group-text' style={{color:'gray', fontSize:'1.25rem'}}><i class="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                        <div className='lh-lg'>
                            <a href="" className='fw-light me-3' style={{ color: 'white', letterSpacing: '.05rem', borderBottom: '1px solid white', paddingBottom: '4px', textDecoration: 'none' }}>Track account opening</a>
                            <a href="" className='fw-light me-3' style={{ color: 'white', letterSpacing: '.05rem', borderBottom: '1px solid white', paddingBottom: '4px', textDecoration: 'none' }}>Track segment activation</a>
                            <a href="" className='fw-light me-3' style={{ color: 'white', letterSpacing: '.05rem', borderBottom: '1px solid white', paddingBottom: '4px', textDecoration: 'none' }}>Intraday margins</a><br />
                            <a href="" className='fw-light me-3' style={{ color: 'white', letterSpacing: '.05rem', borderBottom: '1px solid white', paddingBottom: '4px', textDecoration: 'none' }}>Kite user manual</a>
                        </div>
                    </div>
                    <div className="col-4 align-self-center me-3 lh-lg">
                        <h4 style={{ color: 'white', fontSize: '1.25rem', letterSpacing: '.05rem' }}>Featured</h4>
                        <ol>
                            <li className='fw-light mb-3' style={{ textDecoration: 'underline', color: 'white' }}>Latest Intraday leverages and Square-off timings</li>
                            <li className='fw-light' style={{ textDecoration: 'underline', color: 'white' }}>Surveillance measure on scrips - June 2025</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;