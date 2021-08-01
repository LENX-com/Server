import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const promoBanners = [
    {
        img: 'https://img.joomcdn.net/c88243e34ca91c74ccdefa13c0538913dcbde29e_352_352.png',
        title: 'Buy Local',
        description: ' Support Local Businesses' 
    },
    {
        img: 'https://i.ibb.co/8s6ZrQ1/banner.jpg',
        title: 'Buy Local',
        description: ' Support Local Businesses' 
    },
    {
        img: 'https://i.ibb.co/8s6ZrQ1/banner.jpg',
        title: 'Buy Local',
        description: ' Support Local Businesses' 
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
                    promoBanners.map( ({img, title, description}) =>

                    <SwiperSlide>    
                        <div className="bg-cover bg-center  h-auto text-white py-10 px-10 object-fill banner flex">
                            <div className="flex md:w-1/2">
                                <div>
                                    <p className="font-bold text-sm uppercase"> { title } </p>
                                    <p className="text-2xl mb-10 leading-none"> { description } </p>
                                </div>
                            </div>
                            <div className=" h-20 w-20">
                                <img src={ img } alt="banner"/>
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
