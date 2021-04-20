import React from 'react';
import HomeFooter from '../home/homeFooter/HomeFooter';
import AdvanceBody from './advanceBody/AdvanceBody';
import AdvanceHeader from './advanceHeader/AdvanceHeader';

const Advance = () => {
    return (
        <div>
            <AdvanceHeader></AdvanceHeader>
            <AdvanceBody></AdvanceBody>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Advance;