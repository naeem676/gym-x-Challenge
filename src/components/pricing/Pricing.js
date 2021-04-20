import React from 'react';
import HomeFooter from '../home/homeFooter/HomeFooter';
import PricingBody from './pricingBody/PricingBody';
import PricingHeader from './pricingHeader/PricingHeader';

const Pricing = () => {
    return (
        <div>
           <PricingHeader></PricingHeader> 
           <PricingBody></PricingBody>
           <HomeFooter></HomeFooter>
        </div>
    );
};

export default Pricing;