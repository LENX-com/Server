import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/Typography/SectionTitle'
import { Link } from 'react-router-dom'

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

const PopularStores = () => {
    return (
        <div className="p-2 my-3">
            <SectionTitle> Popular stores </SectionTitle>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                freeMode= { true }
            >
            {
                brands.map ((brand, i) => 
                    <SwiperSlide className="p-2" key= {brand.name}>
                         <article className="rounded-xl mx-auto group shadow-button bg-white max-w-md pb-2 rounded-b-xl transform duration-500 hover:-translate-y-2 cursor-pointer group">
                            <section className="content bg-cover bg-center h-32 rounded-t-xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100)'}}>
                                <div className="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-xl">
                                </div>
                            </section>
                                <div className="mt-3 px-2 text-center">
                                <h2 className="mt-2 text-base font-medium"> { brand.name } </h2>
                                </div>
                        </article>
                    </SwiperSlide>
                )
            }
            </Swiper>

            <Link className="text-base text-center ml-2">
                See all
            </Link>
        </div>
    );
};

export default PopularStores;  