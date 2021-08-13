import React from 'react'
import { Company, Shipping, Chat, StartUp } from '../../assets/icons'
import Card from '../../../components/Cards/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

const LinkFeatures = () => {


    const Feature = [
        {
            name: "Buy directly from brands",
            icon: <Company />
        },
        {
            name: " Fast shipping ",
            icon: <Shipping />
        },
        {
            name: " Easy chat",
            icon: <Chat />  
        },
        {
            name: " Made by startups ",
            icon: <StartUp />  
        }
    ]
 
    const LinkFeature = () => {
        return (
            <Card>
            <Swiper
                    spaceBetween={5}
                    slidesPerView={3}>

                    {Feature.map((data, i) => (
                    <SwiperSlide>
                        <div className="wrapper">
                            <div className="font-xl p-2 h-16 w-16 text-center mx-auto">
                                {data.icon}
                            </div>
                            <div className="icon-wrapper text-center text-sm">
                                {data.name} 
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
            </Card>
        )
    }

    return (
        <>
         <LinkFeature />   
        </>
    )
}

export default LinkFeatures


