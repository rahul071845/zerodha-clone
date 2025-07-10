import React from 'react';

function Stats() {
    return ( 
        <div className="container pb-4 mt-5">
            <div className="row">
                <div className="col-4 offset-md-1">
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <div className='mb-4'>
                        <h5>Customer-first always</h5>
                        <p className='text-muted lh-lg'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mb-4'>
                        <h5>No spam or gimmicks</h5>
                        <p className='text-muted lh-lg'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='mb-4'>
                        <h5>The Zerodha universe</h5>
                        <p className='text-muted lh-lg'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h5>Do better with money</h5>
                        <p className='text-muted lh-lg'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 ms-3">
                    <img src="media/images/ecosystem.png" alt="" style={{width:'98%'}} />
                    <p style={{textAlign:'center', marginTop:'1.5rem'}}>
                        <a href="" className='text-decoration-none'>
                            Explore our products
                            <i class="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                        <a href="" className='ms-5 text-decoration-none'>
                            Try Kite demo
                            <i class="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <img src="media/images/pressLogos.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Stats;