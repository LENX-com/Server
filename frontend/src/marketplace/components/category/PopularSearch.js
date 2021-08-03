import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const PopularSearch = () => {

  const [ menu, setMenu ] = useState();

    const popular = [
        { name: 'Flowers',
          link: ""
        },
        { name: ' Water ',
          link: ""
        },
        { name: ' Lemons ',
          link: ""
        },
        { name: ' Coffee ',
          link: ""
        },
        { name: ' Water ',
          link: ""
        },
        { name: ' Juices ',
          link: ""
        }
    ]


    
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                className="search "
                freeMode = { true }
                >
            {popular?.map((data, i) => (
            <SwiperSlide className= {` ${ menu === i ? "bg-orange shadow-none text-white" : ""} bg-white px-2 py-1 m-2 shadow-product`}>
                <div onClick = {(() => setMenu(i))}>
                    <div className="text-sm mx-1 whitespace-nowrap">
                        <h2>
                            { data.name }
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}


export default PopularSearch
