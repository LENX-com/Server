import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import StoreCard from '../components/stores/StoreCard'
import CategorySlider from '../components/stores/CategorySlider'
import { getCategories } from "../../actions/categoryAction";
import SearchBar from '../../components/searchbar/SearchBar'

const Stores = () => {
        const fakeArray = Array(5).fill(5);
        const categories = useSelector(state => state.category.categories)
        const dispatch = useDispatch();

        useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div className="my-2">
            <div className="my-2">
                <CategorySlider categories= { categories }/>
            </div>
            <div className="my-2 mx-2">
                <SearchBar placeholder="Search Stores" />
            </div>

            {fakeArray.map((data => 
                <StoreCard/>
            ))}
        </div>
    )
}

export default Stores
 