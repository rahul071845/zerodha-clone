import React from 'react';

function Partner({imgSrc, description}) {
    return ( 
        <a className='text-decoration-none text-center' style={{}}>
            <img src={imgSrc} alt="" style={{width:'90%'}} />
            <p style={{fontSize:'0.75rem', color:'gray', opacity:'0.7'}}>{description}</p>
        </a>
    );
}

export default Partner;