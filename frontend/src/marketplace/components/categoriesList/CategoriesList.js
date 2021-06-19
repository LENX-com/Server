import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const categories = [
    {
        img:'https://png.pngtree.com/element_our/png/20181129/smart-device-vector-icon-png_253325.jpg'
    },
    {
        img:'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-vaporizer-device-vector-icon-png-image_1872291.jpg'
    },
    {
        img:'https://png.pngtree.com/png-vector/20191022/ourmid/pngtree-vector-router-icon-png-image_1843761.jpg'
    },
    {
        img:'https://js.pngtree.com/web3/images/v2/premium-pulldown-img.png'
    }
]

const CategoriesList = () => {
    return (
        <div className="mb-5">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    categories.map (category => 
                    <SwiperSlide>
                        <div className="border-red-400 rounded-full border-2">
                            <img className="rounded-full" src={category.img} alt="slider img" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CategoriesList;