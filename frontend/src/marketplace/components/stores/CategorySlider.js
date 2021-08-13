import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const CategorySlider = ({categories}) => {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                className="search "
                freeMode = { true }
                >
            {categories?.map((data) => (
            <SwiperSlide className=" bg-white px-2 py-1 m-2 shadow-product ">
                <div>
                    <div className="text-sm mx-1 whitespace-nowrap">
                        <h2>
                            { data.name }
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default CategorySlider
