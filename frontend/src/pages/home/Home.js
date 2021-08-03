import React,{useState, useEffect} from 'react';

import Banner from '../../marketplace/components/banner/Banner';
import NameSlider from '../../marketplace/components/home/NameSlider';
import LinkFeatures from '../../marketplace/components/home/LinkFeatures';
import PopularItems from '../../marketplace/components/home/PopularItems';
import PopularStores from '../../marketplace/components/home/PopularStores';
import LinkToProducts from '../../marketplace/components/home/LinkToProducts';
import BannerBotom from '../../marketplace/components/home/BannerBottom'
import Header from '../../marketplace/components/header/Header'
import Footer from '../../marketplace/components/footer/Footer'
import { getCategories, getProducts } from '../../actions/marketplace'

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
    )
};

export default Home;
