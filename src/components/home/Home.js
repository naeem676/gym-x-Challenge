import React from 'react';
import Header from './header/Header';
import HomeCenter from './homeCenter/HomeCenter';
import HomeChose from './homeChose/HomeChose';
import HomeFooter from './homeFooter/HomeFooter';
import HomeMain from './homeMain/HomeMain';
import HomePrograms from './homePrograms/HomePrograms';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeMain></HomeMain>
            <HomeCenter></HomeCenter>
            <HomePrograms></HomePrograms>
            <HomeChose></HomeChose>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;