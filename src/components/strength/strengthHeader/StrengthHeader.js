import React from 'react';
import Nav from '../../home/header/nav/Nav';
import StrengthMain from '../strengthMain/StrengthMain';

const StrengthHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <StrengthMain></StrengthMain>
            
        </div>
    );
};

export default StrengthHeader;