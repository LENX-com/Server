import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import Card from '../../../components/Cards/Card'
import { AiFillAlert, AiOutlineRight }  from 'react-icons/ai'

const NameSlider = ({categories}) => {
    
    return (
        <Card className="my-2">
            <div className="flex justify-between">
                <div>
                    <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"> Shop by category</h2>
                </div>
                <div>
                    <Link to="/marketplace/categories" className="text-base text-Blue">
                        See All
                    </Link>
                </div>
            </div>
            <div className="mb-3">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    slidesPerColumn={2}
                    slidesPerGroup={3}
                    slidesPerColumnFill="row"
                    freeMode={ true }
                    className="name-slider"
                    >
                {categories?.map((brand) => (
                    <SwiperSlide className="p-2 " key= {brand.name}>
                        <Link to= {`/marketplace/category/${brand._id}`}>
                            <article className="rounded-xl mx-auto group shadow-button bg-white max-w-md pb-2 rounded-b-xl transform duration-500 hover:-translate-y-2 cursor-pointer group h-22">
                                <div className= "p-2" >
                                  <AiFillAlert className="h-10 w-10  m-auto"/>
                                </div>
                                    <div className="mt-3 px-2 text-center">
                                    <h2 className="mt-2 text-base font-medium"> { brand.name } </h2>
                                    </div>
                            </article>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </Card>
    )
}


export default NameSlider
