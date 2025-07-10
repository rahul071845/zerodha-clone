import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='container p-3 mt-4 mb-4'>
            <div className="row text-center">
                <h2 className='mt-5 pb-3'>404 Not Found</h2>
                <p className='fs-6 fw-light'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className='text-decoration-none'>
                    <button className='p-2 mt-3 mb-5 fs-5 btn btn-primary' style={{ width: '17%', margin: '0 auto' }}>Go to home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;