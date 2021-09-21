import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import Card from '../../../components/Cards/Card'
import { AiFillAlert, AiOutlineRight }  from 'react-icons/ai'
import { Desktop, Mobile } from '../../../ScreenSize'

const NameSlider = ({categories}) => {
      
    return (
        <Card className="my-2">
            <div className="flex justify-between">
                <div>
                    <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"> Shop by category</h2>
                </div>
                <div>
                    <Link to="/marketplace/categories" className="text-sm text-Black underline">
                        See All
                    </Link>
                </div>
            </div>
            <div className="mb-3">
                <Desktop>
                    <div className="grid grid-cols-6 gap-3">
                        {categories?.map((brand) => (
                            <Link to= {`/marketplace/category/${brand._id}`} key={brand.name} className="bg-white rounded-md border-box h-52 transform duration-500 hover:-translate-y-2 cursor-pointer group">
                                <article className= "h-3/4 bg-cover bg-center rounded-t-md" style={{background:`url("https://images.tokopedia.net/img/cache/400/wCVIqt/2021/9/13/7ffb2021-c11a-446d-8d62-2f5a8c05d757.jpg.webp?ect=4g")`}} />
                                <div className="mt-3 px-2 text-center">
                                    <h2 className="mt-2 text-base font-medium"> { brand.name } </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Desktop>

                <Mobile>
                    <Swiper>
                        {categories?.map((brand) => (
                            <SwiperSlide className="bg-white rounded-md border-box h-44 transform duration-500 hover:-translate-y-2 cursor-pointer group m-2 w-5/6">
                                <Link to= {`/marketplace/category/${brand._id}`} key={brand.name} className="">
                                    <article className= "h-3/4 bg-cover bg-center rounded-t-md" style={{background:`url("https://images.tokopedia.net/img/cache/400/wCVIqt/2021/9/13/7ffb2021-c11a-446d-8d62-2f5a8c05d757.jpg.webp?ect=4g")`}} />
                                    <div className="mt-3 px-2 text-center">
                                        <h2 className="mt-2 text-base font-medium"> { brand.name } </h2>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            ))}
                    </Swiper> 
                </Mobile>
            </div>                   
        </Card>
    )
}


export default NameSlider
