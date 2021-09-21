import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../components/Cards/Card'
import CategoryProduct from '../../components/product/CategoryProduct'
import Button from '../../../components/Buttons/Button'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

const LinkToProducts = ({categories, products}) => {
    const [menu , setMenu ] = useState({
        state: 0,
        // title: <> {categories && categories[0].name} </>
         title: <> {categories && "name"} </>
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Card>
            <div className="flex justify-between">
                <div>
                    <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"> Marketplace </h2>
                </div>
                <div>
                    <Link to="/marketplace/categories" className="text-sm text-Black underline">
                        Explore marketplace
                    </Link>
                </div>
            </div>

            { isTabletOrMobile ?
                <Swiper
                    slidesPerView = {4}
                    paceBetween={20}
                    className="mb-4"
                >
                    {categories?.map((category, i) => (
                            <SwiperSlide className= {`${menu.state === i ? 'border-b-2 border-orange text-orange font-bold' : 'text-Black-medium'} whitespace-nowrap w-auto p-2 text-lg cursor-pointer`}
                                onClick = {() => ( setMenu ({ state:i,
                                                            title: category.name
                            }))}>
                            <div className= {`${ menu.state === i ? "font-bold" : ""} text-lg`}>
                                <h2>
                                    { category.name }
                                </h2>
                            </div>
                    </SwiperSlide>
                    ))} 
                </Swiper>

                :

                <div className="grid grid-cols-6 shadow-separator mb-4">
                    {categories?.map((category, i) => (
                        <div className="p-2">
                        <div className= {`${menu.state === i ? 'border-b-2 border-orange text-orange font-bold' : 'text-Black-medium'} text-lg w-auto p-2 cursor-pointer`}
                            onClick = {() => (setMenu({state:i,
                                title: category.name}))}>
                            <div className= {`text-center mx-1 whitespace-nowrap ${ menu.state === i ? "font-bold" : ""} text-lg`}>
                                <h2>
                                    { category.name }
                                </h2>
                            </div>
                        </div>
                    </div>
                    ))} 
                </div>
            }

            <div className="grid grid-cols-5 gap-5 mb-3 mobile:grid-cols-2">
                { products && products.map(data => (
                    <CategoryProduct product ={ data }  />
                ))}
            </div>
            <div className="grid">
                <Button className="bg-white my-2 w-2/3 mx-auto lg:w-1/4"> Load more </Button>
            </div>
        </Card>
    )
}

export default LinkToProducts
