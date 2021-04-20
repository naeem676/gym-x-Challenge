import React from 'react';
import Nav from '../../home/header/nav/Nav';
import WomenMain from '../womenMain/WomenMain';

const WomenHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <WomenMain></WomenMain>
        </div>
    );
};

export default WomenHeader;