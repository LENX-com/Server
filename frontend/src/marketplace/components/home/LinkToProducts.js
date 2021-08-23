import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../components/Cards/Card'
import CategoryProduct from '../../components/product/CategoryProduct'
import Button from '../../../components/Buttons/Button'

const LinkToProducts = ({categories, products}) => {
    const [menu , setMenu ] = useState({
        state: 0,
        // title: <> {categories && categories[0].name} </>
         title: <> {categories && "name"} </>
    })

    return (
        <Card title =" Best products" >
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                className="search"
                >
            {categories?.map((category, i) => (
            <SwiperSlide className="p-2">
                <div>
                    <div className= {`wrapper rounded-lg p-2 ${menu.state === i ? 'bg-orange text-orange border-2 border-orange bg-opacity-10 font-bold shadow-none' : 'bg-white shadow-product'}`}
                          onClick = {() => (setMenu({state:i,
                                                     title: category.name}))}>
                        <div className= {`text-sm mx-1 whitespace-nowrap ${ menu.state === i ? "font-bold" : ""}`}>
                            <h2>
                                { category.name }
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))} 
            </Swiper>

            <div className="grid grid-cols-2 gap-5 mb-3">
                { products && products.map(data => (
                    <CategoryProduct product ={ data }  />
                ))}
            </div>
            <div className="grid">
                <Button className="bg-Black text-white my-2 w-2/3 mx-auto"> Load more </Button>
            </div>
        </Card>
    )
}

export default LinkToProducts
