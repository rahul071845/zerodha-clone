import React from 'react';

function Right({ imgSrc, title, description, linkHead }) {
    return ( 
        <div className="container my-5 py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-3">
                    <h1 className='mb-4 fs-2'>{title}</h1>
                    <p className='fw-lighter' style={{ letterSpacing: '0.075rem', lineHeight: '1.75rem' }}>{description}</p>
                    {
                        linkHead &&
                        <a href="" style={{ textDecoration: 'none' }}>
                            {linkHead}
                            <i className="fa fa-long-arrow-right ms-1 me-5" aria-hidden="true"></i>
                        </a>
                    }
                </div>
                <div className="col-6 offset-1">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Right;