import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom";
import CategotyCard from "../categoryCard/CategoryCard"

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
                            <Link to="/"><img src={promoBanner.img} alt="promotion banner" /></Link>
                        </SwiperSlide>
                    )
                }
                </Swiper>
            </div>

            <div className="popular-category">
                <h1>Popular Category</h1>
                <CategotyCard />
            </div>
        </div>
    );
};

export default Banner;