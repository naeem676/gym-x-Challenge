import React from 'react';
import Nav from '../../home/header/nav/Nav';
import CardioMain from '../cardioMain/CardioMain';

const CardioHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <CardioMain></CardioMain>
        </div>
    );
};

export default CardioHeader;