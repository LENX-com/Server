import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCategories } from '../../../actions/marketplace'

const NameSlider = () => {

    const [ categories, setCategories ] = useState();

    useEffect(() => {
        getCategories().then( data => {
           setCategories(data) })
    }, [])

    console.log(categories)
    
    return (
        <div>
            <Swiper
                spaceBetween={40}
                slidesPerView={4}
                >
            {categories?.map((data) => (
            <SwiperSlide>
                <div className="wrapper rounded-lg p-2 bg-white border-2 border-Blue shadow-border">
                    <div className="text-base mx-1 whitespace-nowrap">
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


export default NameSlider
