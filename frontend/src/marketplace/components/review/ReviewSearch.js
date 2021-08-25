import React from 'react'
import {  MdStar} from 'react-icons/md'
import SearchBar from '../../../components/searchbar/SearchBar'


const ReviewSearch = ({product}) => {
  
    return ( 
        <div className="relative p-2 my-2">
            <div className="flex">
                {product &&
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex"> 
                   <MdStar className="text-orange"/>
                    { product.comments.length === 1 ? `${product.comments.length} review` : `${product.comments.length} reviews` }
                </h1>
                }
            </div>
            <div className="sidebar__search my-2">
              <SearchBar placeholder = "Search Reviews" />
            </div>
        </div>
    )
}

export default ReviewSearch
