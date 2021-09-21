import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/Cards/Card'
import { SwiperSlide, Swiper } from 'swiper/react'
import Rating from 'react-rating'
import {MdStar} from 'react-icons/md'
import { getProductReviews } from "../../../actions/productAction";
import { AddLike, RemoveLike } from '../../../actions/reviewsAction'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { Star, EmptyStar, Tree } from '../../assets/icons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'
import HorizontalChart from '../chart/HorizontalChart'



const Review = ({product, isTabletOrMobile, setIsOpenSign}) => {
    const dispatch = useDispatch();
    const [ tab, setTab ] = useState(0)
    const reviews = useSelector((state) => state.product.productReviews)
    const { isAuthenticated } = useSelector( state => state.auth)
    const [ hasLiked, setHasLiked ] = useState(false)
    const [ hasUnliked, setHasUnliked ] = useState(false)


    const iconStyle = {
    width: "20px",
    height: "20px",
    fontWeight: "600",
    }

    useEffect(() => {
        dispatch(getProductReviews(product?._id))
    }, [dispatch])

       useEffect(() => {
        dispatch(getProductReviews(product?._id))
    }, [hasLiked])
    

    var total = 0;
        for(var i = 0; i < reviews.length; i++) {
        total += reviews[i].rating;
    }
    var avg = total / reviews.length;

    const handleLike = (review) => {
        if(!isAuthenticated) {
            setIsOpenSign(true)
        } 
        else {
        dispatch(AddLike(review))
        setHasLiked(true)
        }
    }
     const handleRemoveLike = (review) => {
        if(!isAuthenticated) {
            setIsOpenSign(true)
        }
        else { 
            dispatch(RemoveLike(review))
            setHasLiked(false)
            setHasUnliked(true)
        }
    }

    const NoReview = () => (
        <div className="mb-4">
            <div className="m-auto text-center">
                <Tree className="text-center mx-auto my-2"/>
                <span className="font-bold"> Sorry there are no reviews for {product.name} </span>
            </div>
        </div>
    )


    const ReviewCard = ({review}) => (
        <div className="grid grid-cols-3 gap-4 shadow-separator p-3">
            <div className="flex">
                <div clssName="text-center p-2 mr-3 my-auto" >
                    <button className="m-auto cursor-pointer" 
                        onClick= {() => handleLike (review._id)}
                    >
                        <AiOutlineCaretUp className="m-auto  text-Black-medium text-lg"/>
                    </button>
                    <h1 className="text-center  text-Black-medium  text-2xl"> {review.likes?.length} </h1>
                    <button className="m-auto  cursor-pointer"
                        onClick={() => handleRemoveLike(review._id)}
                    >
                        <AiOutlineCaretDown  className=" text-Black-medium text-lg"/>
                    </button>
                </div>
                <div className="flex ml-3 my-auto">
                    <div>
                        <img className="h-12 w-12 rounded-full" src= {review.author.avatar} />
                    </div>
                    <div className="ml-3 my-auto">
                        <div className="text-sm ">
                            <span className="font-bold text-Black "> {review.author.name} </span>
                            <div className="text-Black-medium text-xs capitalize"> {(moment(review.date).startOf('day').fromNow())} </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-auto">
                <Rating
                    className=""
                    fullSymbol= { <Star className= "text-lg" style={{width:"16px", height: "16px"}}/> }
                    emptySymbol ={ <EmptyStar className= "text-lg" style={{width:"16px", height: "16px"}}/>}
                    readonly
                    initialRating={review.rating}
                />
                <div className="mt-2">
                    {review.review}
                </div>
            </div>
        </div>
    )

    return (
        <>
            { isTabletOrMobile ?
            // Mobile and tablet version
                <Card className="overflow-x-hidden ">
                    <div className="flex">
                        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex"> 
                    <MdStar className="text-orange"/>
                        { reviews.length === 1 ? `${reviews.length} review` : `${reviews.length} reviews`}
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
                    
                    { reviews.length !== 0 &&
                
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        freeMode= { true }
                    >
                    {reviews && reviews.map(data => (
                        <SwiperSlide className="my-3 w-9/12">    
                            <ReviewCard review = {data}/>
                        </SwiperSlide>
                        ))}

                    </Swiper>
                    }
                    
                    <div className="my-3">
                        <Link className="grid" to={`/marketplace/products/reviews/${product.slug}`}>
                            <Button className="bg-Blue text-white inline-block"> See All </Button>
                        </Link>
                    </div>
                </Card>
            
            :

            // Desktop Version
            <>
                    <Card title= {`Product reviews (${reviews.length})`} className="p-0">
                        { reviews.length !== 0 ?
                            <> 
                                <div className="flex">
                                    <div>
                                        <div className="flex">
                                            <div>
                                                <h1 className="text-2xl font-bold"> {avg} </h1>
                                            </div>
                                            <span>/5</span>
                                        </div>
                                        <div className="text-lg">
                                            <Rating
                                                className="mt-2"
                                                fullSymbol= { <Star className=""style={iconStyle} /> }
                                                // halfSymbol= { <Star className="text-base "style={iconStyle} />}
                                                readonly
                                                emptySymbol ={ <EmptyStar className="" style={iconStyle}/>}
                                                initialRating={Math.round(avg)}
                                            />
                                        </div>    
                                    </div>
                                    <div className="pl-12">
                                        <div>
                                        <HorizontalChart />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {reviews && reviews.map( review =>
                                        <div className="my-3">
                                            <ReviewCard review={review} />    
                                        </div> 
                                    )}
                                </div>
                            </>
                            
                            :
                            
                            <NoReview />
                            
                            }
                    </Card>
            </>
        }
    </>
    )
}

export default Review
