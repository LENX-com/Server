import React, {useState, useEffect } from 'react'
import CategoriesList from '../components/Categories/CategoriesList'
import PageTitle from '../../components/Typography/PageTitle'
import PopularStores from '../components/home/PopularStores'
import PopularProduct from '../components/product/PopularProduct'
import PopularSearches from '../components/Categories/PopularSearches'
import { getCategories,  getProducts } from '../../actions/marketplace'
import Banner from '../components/banner/Banner'


const Categories = () => {

    const [ categories, setCategories ] = useState();
    const [ productList, setProductList] = useState()

    useEffect(() => {
        getCategories().then( data => {
           setCategories(data) })
    }, [])

        useEffect(() => {
        getProducts('createdAt').then(data => {
            setProductList(data);
        })
    }, [])

    console.log(productList)


    return (
        <>  
            <Banner />
            <CategoriesList categories= {categories} />
        </>
    )
}

export default Categories
  