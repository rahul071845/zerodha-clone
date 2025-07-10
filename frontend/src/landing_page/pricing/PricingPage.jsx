import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpeningCharges from './OpeningCharges';
import AddedServices from './AddedServices.jsx';

function PricingPage() {
    return (
        <div>
            <Hero />
            <Brokerage />
            <OpeningCharges />
            <AddedServices />
        </div>
    );
}

export default PricingPage;