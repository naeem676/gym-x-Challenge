import React from 'react';
import HeaderMain from './headerMain/HeaderMain';
import Nav from './nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
            <Nav></Nav>
            <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;