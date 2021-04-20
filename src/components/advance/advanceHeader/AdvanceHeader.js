import React from 'react';
import Nav from '../../home/header/nav/Nav';
import AdvanceMain from '../advanceMain/AdvanceMain';

const AdvanceHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <AdvanceMain></AdvanceMain>
        </div>
    );
};

export default AdvanceHeader;