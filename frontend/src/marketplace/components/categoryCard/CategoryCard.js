import React from 'react';

const products = [
    {
        title: "title will be here",
        img: "https://png.pngtree.com/png-vector/20210324/ourmid/pngtree-pink-headset-technology-wireless-headphones-png-image_3110564.jpg",
        price: "$5",
        rating: "*****"
    },
    {
        title: "title two be here",
        img: "https://png.pngtree.com/png-vector/20210324/ourmid/pngtree-pink-headset-technology-wireless-headphones-png-image_3110564.jpg",
        price: "$8",
        rating: "*****"
    },
    {
        title: "title three be here",
        img: "https://png.pngtree.com/png-vector/20210324/ourmid/pngtree-pink-headset-technology-wireless-headphones-png-image_3110564.jpg",
        price: "$10",
        rating: "*****"
    },
    {
        title: "title four be here",
        img: "https://png.pngtree.com/png-vector/20210324/ourmid/pngtree-pink-headset-technology-wireless-headphones-png-image_3110564.jpg",
        price: "$15",
        rating: "*****"
    }
]

const CategoryCard = () => {
    return (
        <div className="container mx-auto">   
            {
                products.map (product => 
                <div className="grid-cols-6">
                    <img  src={product.img} alt="productimage"/>
                    <h4>{product.title}</h4>
                    <h6>{product.price}</h6>
                    <span>{product.rating}</span>
                </div>
                )
            }
        </div>
    );
};

export default CategoryCard;