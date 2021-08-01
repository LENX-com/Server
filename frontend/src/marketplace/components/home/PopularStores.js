import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/Typography/SectionTitle'
import { Link } from 'react-router-dom'
import Card from '../../../components/Cards/Card'
import { AiOutlineRight } from 'react-icons/ai'

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
        <Card className="my-3">
            <div className="flex justify-between">
                <div>
                    <SectionTitle> Popular stores </SectionTitle>
                </div>
               <div className="flex mt-2">
                    <Link to="/marketplace/stores" className="text-base text-center ml-2">
                        See all
                    </Link>
                    <AiOutlineRight className="my-auto ml-1" />
            </div>

            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                freeMode= { true }
            >
            {
                brands.map ((brand, i) => 
                    <SwiperSlide className="p-2 w-4/5" key= {brand.name}>
                         <article className="rounded-xl mx-auto group  max-w-md pb-2 rounded-b-xl transform duration-500 hover:-translate-y-2 cursor-pointer group bg-white shadow-button">
                            <section className="content bg-cover bg-center h-32 rounded-t-xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100)'}}>
                                <div className="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-xl">
                                </div>
                            </section>
                                <div className="mt-3 px-2 text-center">
                                <h2 className="mt-2 text-base font-bold"> { brand.name } </h2>
                                </div>
                                <div className="Center w-full">
                                    <div className="bg-cover bg-center h-16 w-16 rounded-sm bg-white m-auto" style= {{backgroundImage: "url(https://http2.mlstatic.com/D_Q_NP_871989-MLA25801430807_072017-T.webp)"}}/>
                                </div>
                        </article>
                    </SwiperSlide>
                )
            }
            </Swiper>
        </Card>
    );
};

export default PopularStores;  