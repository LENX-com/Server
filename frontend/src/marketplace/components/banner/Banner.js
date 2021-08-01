import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const promoBanners = [
    {
        img: 'https://i.ibb.co/8s6ZrQ1/banner.jpg'
    },
    {
        img: 'https://i.ibb.co/8s6ZrQ1/banner.jpg'
    },
    {
        img: 'https://i.ibb.co/8s6ZrQ1/banner.jpg'
    }
]

const Banner = () => {
    return (
        <div>      
            <div className="banner-slider">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                >
                {
                    promoBanners.map( promoBanner =>

                    <SwiperSlide>    
                        <div className="bg-cover bg-center  h-auto text-white py-10 px-10 object-fill banner flex">
                            <div className="flex md:w-1/2">
                                <div>
                                    <p className="font-bold text-sm uppercase"> Buy local </p>
                                    <p className="text-2xl mb-10 leading-none">Support Local businesses</p>
                                </div>
                            </div>
                            <div className=" h-20 w-20">
                                <img src="https://img.joomcdn.net/c88243e34ca91c74ccdefa13c0538913dcbde29e_352_352.png" alt="banner"/>
                            </div>  
                        </div>
                        </SwiperSlide>
                    )
                }
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
