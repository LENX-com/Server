import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getSearchSelectors} from "redux-search";
import Banner from '../../marketplace/components/banner/Banner';
import PopularCategory from '../../marketplace/components/popularCategory/PopularCategory';
import TopSelling from '../../marketplace/components/topSelling/TopSelling';
import TopManufacturer from '../../marketplace/components/topManufactuerer/TopManufacturer';
import {
    getProductsBySell,
    getProductsByArrival,
  } from "../../actions/productAction"

const Home = () => {
    const dispatch = useDispatch();
    const {text, result} = getSearchSelectors("product");
    useEffect(() => {
        console.log(text, result)
        dispatch(getProductsBySell("sold"));
        dispatch(getProductsByArrival("createdAt"));
      }, []);
    return ( 
         <main>
            <Banner />
            <PopularCategory />
            <TopSelling />   
            <TopManufacturer />
         </main>
    )
};

export default Home;
