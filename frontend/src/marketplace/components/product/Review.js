import React, { useState } from 'react'
import Card from '../../../components/Cards/Card'
import { SwiperSlide, Swiper } from 'swiper/react'
import {MdStar} from 'react-icons/md'
import ReviewCard from '../review/ReviewCard'
import { Link } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'


    const dummyComment = [
        {
            comment: "I liked this product"
        },
        {
            comment: "I liked this product"
        },
        {
            comment: "I liked this product"
        }
    ] 

const Review = () => {

    const [ tab, setTab ] = useState(0)

    return (
        <Card className="overflow-x-hidden ">
            <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex"> 
               <MdStar className="text-orange"/>
                240 reviews
                </h1>
            </div>
            <div> 
                <div className="flex mt-3">
                    <div 
                        onClick = {( () => setTab (0))}
                        className= {`px-2 ${tab === 0 ? "border-b-2 border-Black" : ""}`}>
                        Item Reviews
                    </div>
                    <div 
                        onClick= {(() => setTab (1))}
                        className= {`px-2 ${tab === 1 ? "border-b-2 border-Black" : ""}`}>
                        Seller reviews
                    </div>
                </div>
            </div>
        
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                freeMode= { true }
            >
            {dummyComment.map(data => (
                <SwiperSlide className="my-3 w-9/12">    
                    <ReviewCard />
                </SwiperSlide>
                ))}

            </Swiper>
            
            <div className="my-3">
                <Link className="grid">
                    <Button className="bg-Blue text-white inline-block"> See All </Button>
                </Link>
            </div>
        </Card>
    )
}

export default Review
