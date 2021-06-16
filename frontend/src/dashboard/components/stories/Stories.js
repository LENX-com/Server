import React from 'react'
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';

const Stories = () => {
    return (
        <section className="md:flex flex-col">
                <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                "clickable": true
                }} className="mySwiper"
                breakpoints={{
                // when window width is >= 640px
                360: {
                width: 360,
                slidesPerView: 5,
                },
                640: {
                width: 640,
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                width: 768,
                slidesPerView: 2,
                },
            }}
            >
                <ul className="md:flex items-center justify-center md:space-x-8">
        {Data.map((data, i) => (
            <SwiperSlide>
             <li key={i} className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1">
              <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300" href="#div">
                <img className="h-24 w-24 rounded-full" src="https://i.ibb.co/yhh0Ljy/profile.jpg" alt="tags" />
              </a>
            </div>
            <p>tahmina_tis_353</p>
          </li>
          </SwiperSlide>
    ))}
     </ul>
     </Swiper>
     </section>
    )
}

export default Stories
