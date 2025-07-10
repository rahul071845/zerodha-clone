import React from 'react';
import TeamMember from './TeamMember.jsx';

function Team() {
    return (
        <div className="container px-5 pb-5">
            <h1 className='pb-4' style={{ whiteSpace: 'nowrap', textAlign: 'center', fontSize: '2rem', letterSpacing: '0.075rem', lineHeight: '3rem' }}>People</h1>
            <div className="row justify-content-center p-5 mx-5">
                <div className="col-4 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="" style={{ width: '95%', borderRadius: '100%' }} />
                    <h5 className='my-3'>Nithin Kamath</h5>
                    <p className='fw-light' style={{ color: 'gray', fontSize: '0.9rem' }}>Founder, CEO</p>
                </div>
                <div className="col-6 text-muted lh-lg mx-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
            <div className="row justify-content-around p-5 me-5">
                <TeamMember imgSrc="media/images/nikhil.jpg" name="Nikhil Kamath" title="Co-founder & CFO" />
                <TeamMember imgSrc="media/images/kailash.jpg" name="Dr. Kailash Nadh" title="CTO" />
                <TeamMember imgSrc="media/images/venu.jpg" name="Venu Madhav" title="COO" />
            </div>
            <div className="row justify-content-around px-5 pb-5 me-5">
                <TeamMember imgSrc="media/images/hanan.jpg" name="Hanan Delvi" title="CCO" />
                <TeamMember imgSrc="media/images/seema.jpg" name="Seema Patil" title="Director" />
                <TeamMember imgSrc="media/images/karthik.jpg" name="Karthik Rangappa" title="Chief of Education" />
            </div>
        </div>
    );
}

export default Team;