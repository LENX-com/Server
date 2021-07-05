import React from 'react';
import SectionTitle from '../Typography/SectionTitle';
import ManufactureCard from '../manufactureCard/ManufactureCard';
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
=======
>>>>>>> 167753521104153367a460f9ffc59e0e71a8c07d

const TopManufacturer = () => {
    return (
        <div className="mt-5">
            <SectionTitle>Top Manufacturer</SectionTitle>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <ManufactureCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ManufactureCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ManufactureCard /> 
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopManufacturer;