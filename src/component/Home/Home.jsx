import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeaturedJob from '../FeatureJob/FeaturedJob';

const Home = () => {


    return (
        <div className=''>
            <Banner/>
            <Category />
            <FeaturedJob/>
        </div>
    );
};

export default Home;