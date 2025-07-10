import React from 'react';

function Left({ imgSrc, title, description, link1Head, link2Head }) {
    return (
        <div className="container pb-5 mb-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="col-3 offset-1">
                    <h1 className='mb-4 fs-2'>{title}</h1>
                    <p className='fw-lighter' style={{ letterSpacing: '0.075rem', lineHeight: '1.75rem' }}>{description}</p>
                    {
                        link1Head &&
                        <a href="" style={{ textDecoration: 'none' }}>
                            {link1Head}
                            <i className="fa fa-long-arrow-right ms-1 me-5" aria-hidden="true"></i>
                        </a>
                    }
                    {
                        link2Head &&
                        <a href="" style={{ textDecoration: 'none' }}>
                            {link2Head}
                            <i className="fa fa-long-arrow-right ms-1 me-5" aria-hidden="true"></i>
                        </a>
                    }
                    <br/>
                    <a href="">
                        <img className='mt-4 me-3' src="media/images/googlePlayBadge.svg" alt="" />
                    </a>
                    <a href="">
                        <img className='mt-4 me-3' src="media/images/appstoreBadge.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Left;