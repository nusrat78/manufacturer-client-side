import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import PopularTools from './PopularTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularTools></PopularTools>
            <Info></Info>

            <Footer></Footer>
        </div>
    );
};

export default Home;