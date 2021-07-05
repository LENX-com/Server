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
    }
]


const ManufactureCard = () => {
    return (
        <div className="mb-5">
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