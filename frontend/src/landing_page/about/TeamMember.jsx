import React from 'react';

function TeamMember({ imgSrc, name, title }) {
    return (
        <div className="col-2 text-center">
            <img src={imgSrc} alt={name} style={{ borderRadius: '100%', width: '150%' }} />
            <h5 className='my-3' style={{ position:'relative', left:'2.5rem'}}>{name}</h5>
            <p className='fw-light' style={{ color: 'gray', fontSize: '0.9rem', position:'relative', left:'2.5rem' }}>{title}</p>
        </div>
    );
}

export default TeamMember;