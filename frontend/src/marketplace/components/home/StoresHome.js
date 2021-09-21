import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import Card from '../../../components/Cards/Card'
import { AiOutlineRight } from 'react-icons/ai'
import Button from '../../../components/Buttons/Button'
import { FaShippingFast, FaRegGrin } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'



const StoresHome = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const brands = new Array(5).fill(5)

    return (
        <div className="bg-white rounded-sm shadow-button relative my-2 p-0">
            <div className= {!isTabletOrMobile && "flex"}>

                {isTabletOrMobile ?
                    <div className="flex justify-between p-3">
                       <div className="text-Black font-bold text-lg">
                            Stores 
                        </div>
                        <Link to="/marketplace/stores">
                                See all shops
                        </Link>
                    </div> 

                :
                    <div className="w-1/5 rounded-tl-sm rounded-bl-sm bg-cover bg-center relative" style={{background: `url("//img.alicdn.com/tfs/TB1M5H4oRjTBKNjSZFwXXcG4XXa-720-400.png")`}}>
                        <div className="h-2/5 text-center m-auto Center w-full">
                            <div className="text-white font-bold text-lg p-2">
                                Buy directly from creative entrepeneurs 
                            </div>
                            <Link to="/marketplace/stores">
                                <Button className="bg-white mt-2">
                                    See all shops
                                </Button>
                            </Link>
                        </div>
                    </div>
                }   

                <div className="w-4/5 m-auto p-3 mobile:w-full">
                    <Swiper
                        spaceBetween={10}
                         navigation={true}
                        className="w-full"
                        slidesPerView= {  isTabletOrMobile ? 1 : 4 }
                    >
                    {
                        brands.map ((brand, i) => 
                            <SwiperSlide className="rounded-md group  transform duration-500 hover:-translate-y-2 cursor-pointer group bg-white border-box m-2 h-64"
                            key= {brand.name}
                            >
                                <section 
                                    className="content bg-cover bg-center h-4/5 rounded-t-md m-auto relative"
                                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100)'}} 
                                >
                                    <div className="Center w-full">
                                        <div className="w-full">
                                            <div className="bg-cover bg-center h-20 w-20 rounded-md bg-white m-auto shadow-button" style= {{backgroundImage: "url(https://http2.mlstatic.com/D_Q_NP_871989-MLA25801430807_072017-T.webp)"}}/>
                                        </div>
                                        <div className="grid grid-cols-3 mt-3 m-auto">
                                            <div className="h-14 w-14 bg-center bg-cover p-2 border-box m-auto" style={{background:`url("https://http2.mlstatic.com/D_Q_NP_2X_609609-MLA45507357605_042021-R.webp")` }} />
                                            <div className="h-14 w-14 bg-center bg-cover p-2 border-box m-auto" style={{background:`url("https://http2.mlstatic.com/D_Q_NP_2X_812514-MLA45213299489_032021-R.webp")` }} />
                                            <div className="h-14 w-14 bg-center bg-cover p-2 border-box m-auto" style={{background:`url("https://http2.mlstatic.com/D_Q_NP_2X_609609-MLA45507357605_042021-R.webp")` }} />
                                        </div>
                                    </div>
                                </section>
                                <div className="mx-auto grid text-center h-1/5">
                                    <Link to = {`marketplace/manufacturer/${brand.slug}`} className="m-auto flex">
                                        <span className="text-Black-medium text-base hover:text-Blue"> Visit store </span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default StoresHome;  