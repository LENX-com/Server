import React, {useState, useEffect} from 'react'
import Banner from '../../marketplace/components/banner/Banner';
import PopularCategory from '../../marketplace/components/popularCategory/PopularCategory';
import TopSelling from '../../marketplace/components/topSelling/TopSelling';
import TopManufacturer from '../../marketplace/components/topManufactuerer/TopManufacturer';
import MobileFooter from '../../marketplace/components/mobileFooter/MobileFooter';

const Home = () => {
    return ( 
        <main>
            <Banner />
            <PopularCategory />
            <TopSelling />
            <TopManufacturer />
            <MobileFooter />
        </main>
    )
};

export default Home;

