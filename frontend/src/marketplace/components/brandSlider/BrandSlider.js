import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
            <h1 className="text-2xl mb-5">Shop by Brand</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
            >
            {
                brands.map (brand => 
                    <SwiperSlide>
                        <img src={brand.img} alt="brand" />
                        <h4>{brand.name}</h4>
                    </SwiperSlide>
                )
            }
            </Swiper>
        </div>
    );
};

export default Slider;