import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Reviews from '../../Reviews/Reviews/Reviews';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;