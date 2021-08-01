import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const PopularSearch = () => {

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
            {popular?.map((data) => (
            <SwiperSlide className=" bg-white px-2 py-1 m-2 ">
                <div>
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
