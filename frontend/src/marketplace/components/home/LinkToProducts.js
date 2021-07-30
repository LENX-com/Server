import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../components/Cards/Card'
import { AiFillCar } from 'react-icons/ai'
import PhotoCard from '../product/PhotoCard'
import Button from '../../../components/Buttons/Button'

const LinkToProducts = ({categories}) => {
    const [menu , setMenu ] = useState({
        state: 0,
        title: <> {categories && categories[0].name} </>
    })

    const fakeArray = Array(6).fill(6)
    

    return (
        <Card>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                className="search"
                >
            {categories?.map((category, i) => (
            <SwiperSlide className="p-2">
                <div>
                    <div className= {`wrapper rounded-lg p-2 ${menu.state === i ? 'bg-orange text-orange border-2 border-orange bg-opacity-10 font-bold shadow-none' : 'bg-white shadow-button'}`}
                          onClick = {() => (setMenu({state:i,
                                                     title: category.name}))}>
                        <div className="text-center">
                        <AiFillCar className="mx-auto text-2xl"/>
                        </div>
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

            <div className="flex justify-center">
                <div className="my-auto mr-2">
                    <AiFillCar />
                </div>
                <div className="my-3 capitalize font-bold">
                    {menu.title}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-3">
                {fakeArray.map(data => (
                    <PhotoCard />
                ))}
            </div>
            <div className="grid">
                <Button className="bg-Black text-white my-2 w-2/3 mx-auto"> Load more </Button>
            </div>
        </Card>
    )
}

export default LinkToProducts
