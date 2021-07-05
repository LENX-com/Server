import React from 'react';
import SectionTitle from '../Typography/SectionTitle';
import CategoryCard from '../categoryCard/CategoryCard';
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
=======
>>>>>>> 167753521104153367a460f9ffc59e0e71a8c07d

const TopSelling = () => {
    return (
        <div className="mt-5">
            <SectionTitle>Top Selling</SectionTitle>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard /> 
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopSelling;