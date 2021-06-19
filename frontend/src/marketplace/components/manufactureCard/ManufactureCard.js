import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const manufacturers = [
    {
        img: 'https://via.placeholder.com/300x200',
        title:"Company One"
    },
    {
        img: 'https://via.placeholder.com/300x200',
        title:"Company Two"
    },
    {
        img: 'https://via.placeholder.com/300x200',
        title:"Company Three"
    },
    {
        img: 'https://via.placeholder.com/300x200',
        title:"Company Three"
    }
]


const ManufactureCard = () => {
    return (
        <div className="mb-5 mt-5">
            <h1 className="text-2xl">Browse by Manufacturer</h1>
            <div className="grid grid-cols-2">
                {
                    manufacturers.map (manufacturer => 
                        <div className="grid-cols-6 bg-white shadow-md m-2">
                            <img className="mb-4" src={manufacturer.img} alt="x manufacturer" />
                            <h4 className="text-lg p-2 text-gray-800">{manufacturer.title}</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManufactureCard;