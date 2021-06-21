import React from 'react';
import { HiStar } from "react-icons/hi";

const products = [
    {
        title: "Mobile Accessories",
        img: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/60671214dd4fe5c8aba1c27a7b2ea294/7c075acd-7793-4ca5-9a39-cefa95171664_rwc_0x4x500x391x500.jpg?h=64620a0a91f2b67b2e0cd4660ddc8a71",
    },
    {
        title: "Laptop & Computer",
        img: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/60671214dd4fe5c8aba1c27a7b2ea294/7c075acd-7793-4ca5-9a39-cefa95171664_rwc_0x4x500x391x500.jpg?h=64620a0a91f2b67b2e0cd4660ddc8a71",
    },
    {
        title: "Wireless Collection",
        img: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/60671214dd4fe5c8aba1c27a7b2ea294/7c075acd-7793-4ca5-9a39-cefa95171664_rwc_0x4x500x391x500.jpg?h=64620a0a91f2b67b2e0cd4660ddc8a71",
    },
    {
        title: "Iphone Accessories",
        img: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/60671214dd4fe5c8aba1c27a7b2ea294/7c075acd-7793-4ca5-9a39-cefa95171664_rwc_0x4x500x391x500.jpg?h=64620a0a91f2b67b2e0cd4660ddc8a71",
    }
]

const CategoryCard = () => {
    return (
        <div className="container mx-auto">
            <div className="grid-rows-1">
                <div className="grid grid-cols-2">
                    {
                        products.map (product =>       
                            <div className="bg-white rounded shadow-md m-2">
                                <img src={product.img} alt="product image"/>

                                <div className="p-2">
                                    <h4 className="text-sm capitalize">{product.title}</h4>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>   
        </div>
    );
};

export default CategoryCard;