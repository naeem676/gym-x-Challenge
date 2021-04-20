import React from 'react';
import HomeFooter from '../home/homeFooter/HomeFooter';
import AllClass from './allClass/AllClass';
import ClassHeader from './ClassHeader/ClassHeader';

const OurClass = () => {
    return (
        <div>
            <ClassHeader></ClassHeader>
            <AllClass></AllClass>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default OurClass;