import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Info from './Info';
import PopularTools from './PopularTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularTools></PopularTools>
            <Info></Info>
            <Business></Business>
            <Footer></Footer>
        </div>
    );
};

export default Home;