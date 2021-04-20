import React from 'react';
import Nav from '../../home/header/nav/Nav';
import ClassMain from '../ClassMain/ClassMain';

const ClassHeader = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <ClassMain></ClassMain>
        </div>
    );
};

export default ClassHeader;