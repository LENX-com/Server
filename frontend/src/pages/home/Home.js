import React,{useState, useEffect} from 'react';

import Banner from '../../marketplace/components/banner/Banner';
import NameSlider from '../../marketplace/components/home/NameSlider';
import LinkFeatures from '../../marketplace/components/home/LinkFeatures';
import PopularItems from '../../marketplace/components/home/PopularItems';
import StoresHome from '../../marketplace/components/home/StoresHome';
import LinkToProducts from '../../marketplace/components/home/LinkToProducts';
import BannerBotom from '../../marketplace/components/home/BannerBottom'
import Header from '../../marketplace/components/header/Header'
import Footer from '../../marketplace/components/footer/Footer'
import { getCategories, getProducts } from '../../actions/marketplace'
import { useDispatch } from 'react-redux'
import SwiperCore, {
  Navigation, Pagination
} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Home = () => {
    
    const [ categories, setCategories ] = useState();
    const [ products, setProducts ] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        
        getCategories().then( data => {
           setCategories(data) })
        
         getProducts().then( data => {
           setProducts(data) })  

        
    }, [])
    
    console.log(products)

    return (
        <> 
           <Header />
            <main className="lg:w-5/6 m-auto">
              <Banner products = { products } />

              <PopularItems />  

              <NameSlider categories = { categories } />
                  
              <StoresHome />  

              <LinkToProducts categories = {categories} products = {products} />

              <BannerBotom /> 
            
              <LinkFeatures /> 

          </main>
          <Footer />
        </>
    )
};

export default Home;
