import React from 'react';
import HomeFooter from '../home/homeFooter/HomeFooter';
import SelfBody from './selfbody/SelfBody';
import SelfHeader from './selfHeader/SelfHeader';

const Self = () => {
    return (
        <div>
        <SelfHeader></SelfHeader>
        <SelfBody></SelfBody>
        <HomeFooter></HomeFooter>
            
        </div>
    );
};

export default Self;