import React from 'react';
import Nav from '../../home/header/nav/Nav';
import PricingMain from '../pricingMain/PricingMain';

const PricingHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <PricingMain></PricingMain>
        </div>
    );
};

export default PricingHeader;