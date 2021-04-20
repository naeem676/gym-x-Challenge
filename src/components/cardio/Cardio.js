import React from 'react';
import HomeFooter from '../home/homeFooter/HomeFooter';
import CardioBody from './cardioBody/CardioBody';
import CardioHeader from './cardioHeader/CardioHeader';

const Cardio = () => {
    return (
        <div>
        <CardioHeader></CardioHeader>
        <CardioBody></CardioBody>
        <HomeFooter></HomeFooter>
            
        </div>
    );
};

export default Cardio;