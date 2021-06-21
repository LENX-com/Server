import React from 'react';
import { HiStar } from "react-icons/hi";
import ManufactureCard from '../../marketplace/components/manufactureCard/ManufactureCard';

const products = [
    {
        title: "HAVIT HV-H2198d Wirless headphone",
        img: "https://i.ibb.co/Swp9QZM/iphone-sets-qyj.png",
        rating: <HiStar></HiStar>,
        price: "$5.00"
    },
    {
        title: "HAVIT HV-H2198d Wirless headphone",
        img: "https://i.ibb.co/Swp9QZM/iphone-sets-qyj.png",
        rating: <HiStar></HiStar>,
        price: "$8.00"
    },
    {
        title: "HAVIT HV-H2198d Wirless headphone",
        img: "https://i.ibb.co/Swp9QZM/iphone-sets-qyj.png",
        rating:<HiStar></HiStar>,
        price: "$10.00"
    },
    {
        title: "HAVIT HV-H2198d Wirless headphone",
        img: "https://i.ibb.co/Swp9QZM/iphone-sets-qyj.png",
        rating: <HiStar></HiStar>,
        price: "$15.00"
    }
]

const SingleCategory = () => {
    return (
        <div>
            <div>
                <a href="#">Category Name</a>
            </div> 

            <div className="col-span-6 sm:col-span-3 m-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Sort by 
                </label>
                <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                <option>Pricing (Low to High)</option>
                <option>Pricing (High to Low)</option>
                <option>Name (A to Z)</option>
                <option>Name (Z to A)</option>
                </select>
            </div>

            <div className="grid-rows-1">
                <div className="grid grid-cols-1">
                    {
                        products.map (product =>       
                            <div className="bg-white shadow-md m-2">
                                <div className="p-2 mb-2">
                                    <img src={product.img} alt="product image"/>
                                </div>

                                <div className="p-2">
                                    <h4 className="text-sm capitalize">{product.title}</h4>
                                    <span className="block mb-1 text-lg text-yellow-400">{product.rating}</span>
                                    <h6 className="text-lg font-bold mb-0 text-gray-800">{product.price}</h6>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>  

            <ManufactureCard></ManufactureCard>   
        </div>
    );
};

export default SingleCategory;