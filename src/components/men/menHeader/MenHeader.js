import React from 'react';
import Nav from '../../home/header/nav/Nav';
import MenMain from '../menMain/MenMain';

const MenHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <MenMain></MenMain>
        </div>
    );
};

export default MenHeader;