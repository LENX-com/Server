import React, {useState, useEffect} from 'react'
import Banner from '../../marketplace/components/banner/Banner';
import NameSlider from '../../marketplace/components/home/NameSlider';
import Section from '../../components/section/Section'
import LinkFeatures from '../../marketplace/components/home/LinkFeatures';
import PopularItems from '../../marketplace/components/home/PopularItems';
import PopularStores from '../../marketplace/components/home/PopularStores';
import Header from '../../marketplace/components/header/Header'
import Footer from '../../marketplace/components/footer/Footer'
import PopularStuff from '../../marketplace/components/home/PopularStuff'

const Home = () => {

    return ( 
         <main>
           <Header />
                <Section>
                    <NameSlider />
                </Section>
                
                <Section>
                    <Banner />
                </Section>
                
                <Section>
                    <LinkFeatures />  
                </Section>

                <Section>
                    <PopularItems />  
                </Section>
                
                <Section>
                    <PopularStores />  
                </Section>

                <Section>
                    <PopularStuff />
                </Section>

            <Footer />
            
         </main>
    )
};

export default Home;
