import React from 'react';
import Nav from '../../home/header/nav/Nav';
import SelfMain from '../selfMain/SelfMain';

const SelfHeader = () => {
    return (
        <div className="header">
        <Nav></Nav>
        <SelfMain></SelfMain>
            
        </div>
    );
};

export default SelfHeader;