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
    }
]


const ManufactureCard = () => {
    return (
        <div>
            <h1>Browse by Manufacturer</h1>
            {
                manufacturers.map (manufacturer => 
                    <div className="grid-cols-6">
                        <img src={manufacturer.img} alt="x manufacturer" />
                        <h4>{manufacturer.title}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default ManufactureCard;