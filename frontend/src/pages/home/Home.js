import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getSearchSelectors} from "redux-search";
import Banner from '../../marketplace/components/banner/Banner';
import NameSlider from '../../marketplace/components/home/NameSlider';
import LinkFeatures from '../../marketplace/components/home/LinkFeatures';
import PopularItems from '../../marketplace/components/home/PopularItems';
import PopularStores from '../../marketplace/components/home/PopularStores';
import LinkToProducts from '../../marketplace/components/home/LinkToProducts';
import BannerBotom from '../../marketplace/components/home/BannerBottom'
import Header from '../../marketplace/components/header/Header'
import Footer from '../../marketplace/components/footer/Footer'
import { getCategories } from '../../actions/marketplace'

const Home = () => {
    
    const [ categories, setCategories ] = useState();

    useEffect(() => {
        getCategories().then( data => {
           setCategories(data) })
    }, [])

    return ( 
         <main>
           <Header />

                    <Banner />

                    <NameSlider categories = { categories } />

                    <LinkFeatures />  

                    <PopularItems />  
                
                    <PopularStores />  

                    <LinkToProducts categories = {categories} />

                    <BannerBotom /> 

            <Footer />
            
         </main>
    )
};

export default Home;
