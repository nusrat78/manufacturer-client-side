import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import PopularTools from './PopularTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularTools></PopularTools>
            <Footer></Footer>
        </div>
    );
};

export default Home;