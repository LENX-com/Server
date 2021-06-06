import React from 'react';

const brands = [
    {
        img:"https://via.placeholder.com/100x100",
        name: 'Brand One'
    },
    {
        img:"https://via.placeholder.com/100x100",
        name: 'Brand Two'
    },
    {
        img:"https://via.placeholder.com/100x100",
        name: 'Brand Three'
    }
]

const Slider = () => {
    return (
        <div>
            <h1>Shop by Brand</h1>
            {
                brands.map (brand => 
                    <div>
                        <img src={brand.img} alt="brand" />
                        <h4>{brand.name}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default Slider;