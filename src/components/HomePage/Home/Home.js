import React from 'react';
import HomeProducts from '../../Products/HomeProducts/HomeProducts';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import HomeReview from '../HomeReview/HomeReview';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities/>
            <HomeProducts></HomeProducts>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;