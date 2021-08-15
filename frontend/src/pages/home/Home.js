import React,{useState, useEffect} from 'react';

import Banner from '../../marketplace/components/banner/Banner';
<<<<<<< HEAD
import PopularCategory from '../../marketplace/components/popularCategory/PopularCategory';
import TopSelling from '../../marketplace/components/topSelling/TopSelling';
import TopManufacturer from '../../marketplace/components/topManufactuerer/TopManufacturer';
import MobileFooter from '../../marketplace/components/mobileFooter/MobileFooter';
import Blog from '../../components/Cards/Blog';
import Manufacture from '../../components/Cards/Manufacture';
import Signup from '../../components/Form/Signup';
import Bloglist from '../../components/Cards/Bloglist';
import Checkout from '../../components/Form/Checkout';
||||||| 456270c
import PopularCategory from '../../marketplace/components/popularCategory/PopularCategory';
import TopSelling from '../../marketplace/components/topSelling/TopSelling';
import TopManufacturer from '../../marketplace/components/topManufactuerer/TopManufacturer';
import MobileFooter from '../../marketplace/components/mobileFooter/MobileFooter';
=======
import NameSlider from '../../marketplace/components/home/NameSlider';
import LinkFeatures from '../../marketplace/components/home/LinkFeatures';
import PopularItems from '../../marketplace/components/home/PopularItems';
import PopularStores from '../../marketplace/components/home/PopularStores';
import LinkToProducts from '../../marketplace/components/home/LinkToProducts';
import BannerBotom from '../../marketplace/components/home/BannerBottom'
import Header from '../../marketplace/components/header/Header'
import Footer from '../../marketplace/components/footer/Footer'
import { getCategories, getProducts } from '../../actions/marketplace'
>>>>>>> 213e4f86c09a7fe48f6674da234ab8582b076ac3

const Home = () => {
    
    const [ categories, setCategories ] = useState();
    const [ products, setProducts ] = useState();

    useEffect(() => {
        
        getCategories().then( data => {
           setCategories(data) })
        
         getProducts().then( data => {
           setProducts(data) })
        
    }, [])

    return ( 
<<<<<<< HEAD
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
||||||| 456270c
        <main>
            <Banner />
            <PopularCategory />
            <TopSelling />
            <TopManufacturer />
            <MobileFooter />
        </main>
=======
         <main>
           <Header />

                    <Banner />

                    <PopularItems />  

                    <LinkFeatures />  

                    <NameSlider categories = { categories } />
                
                    <PopularStores />  

                    <LinkToProducts categories = {categories} products = {products} />

                    <BannerBotom /> 

            <Footer />
            
         </main>
>>>>>>> 213e4f86c09a7fe48f6674da234ab8582b076ac3
    )
};

export default Home;
