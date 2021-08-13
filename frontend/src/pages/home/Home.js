import React, {useState, useEffect} from 'react'
import Banner from '../../marketplace/components/banner/Banner';
import PopularCategory from '../../marketplace/components/popularCategory/PopularCategory';
import TopSelling from '../../marketplace/components/topSelling/TopSelling';
import TopManufacturer from '../../marketplace/components/topManufactuerer/TopManufacturer';
import MobileFooter from '../../marketplace/components/mobileFooter/MobileFooter';
import Blog from '../../components/Cards/Blog';
import Manufacture from '../../components/Cards/Manufacture';
import Signup from '../../components/Form/Signup';
import Bloglist from '../../components/Cards/Bloglist';
import Checkout from '../../components/Form/Checkout';

const Home = () => {
    return ( 
        <main>
            {/* <Banner />
            <PopularCategory />
            <TopSelling />
            <TopManufacturer />
            <MobileFooter /> */}
            <Blog />
            <Manufacture />
            <Signup />
            <Bloglist />
            <Checkout />
        </main>
    )
};

export default Home;
