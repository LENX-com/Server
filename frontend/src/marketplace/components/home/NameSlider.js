import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import Card from '../../../components/Cards/Card'
import Button from '../../../components/Buttons/Button'

const NameSlider = ({categories}) => {
    
    return (
        <Card className="my-2" title="Categories">
            <div className="mb-3">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    slidesPerColumn={2}
                    slidesPerGroup={3}
                    slidesPerColumnFill="row"
                    freeMode={ true }
                    >
                {categories?.map((brand) => (
                    <SwiperSlide className="p-2" key= {brand.name}>
                        <Link to= {`/marketplace/category/${brand._id}`}>
                            <article className="rounded-xl mx-auto group shadow-button bg-white max-w-md pb-2 rounded-b-xl transform duration-500 hover:-translate-y-2 cursor-pointer group">
                                <section className="content bg-cover bg-center h-32 rounded-t-xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100)'}}>
                                    <div className="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-xl">
                                    </div>
                                </section>
                                    <div className="mt-3 px-2 text-center">
                                    <h2 className="mt-2 text-base font-medium"> { brand.name } </h2>
                                    </div>
                            </article>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div>
                <Link to ="/marketplace/categories" className="grid">
                    <Button className="bg-Black text-white my-2 w-2/3 mx-auto"> See All </Button>
                </Link>
            </div>
        </Card>
    )
}


export default NameSlider
