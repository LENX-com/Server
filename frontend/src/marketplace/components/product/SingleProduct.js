import React, { useState, useEffect } from "react";
import {
  MdStarBorder,
  MdStar,
  MdShoppingCart,
  MdFavoriteBorder,
  MdArrowBack,
  MdFavorite,
} from "react-icons/md";
import parse from 'html-react-parser';
import Card from "../../../components/Cards/Card";
import Button from "../../../components/Buttons/Button";
import { addToCart} from "../../../actions/cartActions";
import { addWishList, getWishList } from "../../../actions/wishlistAction";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide, Swiper } from 'swiper/react'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import SignInPop from '../auth/SignInPop'
import SwiperCore, {Pagination } from 'swiper/core';
import '../../styles/swiper.scss'

// install Swiper modules
SwiperCore.use([ Pagination ]);

const SingleProduct = ({ product}) => {
    const [ count, setCount ] = useState(1)
    const [ isOpen, setIsOpen ] = useState(false)
    const history = useHistory();
    const { isAuthenticated } = useSelector((state) => state.auth)
    const { wishlists } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1)
  
  useEffect(() => {
    dispatch(getWishList())
  }, [])

  const handleWishlist = () => (
    !isAuthenticated ? setIsOpen(true)  : dispatch(addWishList(product._id))
  )
  
    return (
             
          <Card className="py-8 mx-auto">  
          {product &&
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
               
            <div className="relative lg:w-1/2 w-full lg:h-auto rounded">
              <Swiper
                spaceBetween={20}
                  slidesPerView={'auto'}
                  pagination={{ "type": "fraction" }}                
              >
                    {product.photo.map(( (data, i) => (
                      <SwiperSlide>
                        <section className="bg-cover bg-center rounded bg-Grey h-72" style= {{background : `url("${data.url}")`}} />
                      </SwiperSlide>
                            )))}
                      </Swiper>
                      <div className=" absolute top-2 left-0 z-50">
                          <div className="flex">
                              <button
                              className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                              onClick={() => setTimeout(() => history.goBack(), 150)}>
                                  <MdArrowBack className="w-5 h-5"/>
                              </button>
                          </div>
                      </div>
                      <div className=" absolute top-2 right-3 z-50">
                          <div className="flex">
                              <button className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                              onClick = {handleWishlist} >
                                {/* This checks if the wishlist item is already added*/}
                                  {wishlists?.some(e => e.product?._id === product._id) ? <MdFavorite className="w-5 h-5"/>: <MdFavoriteBorder className="w-5 h-5"/> }
                              </button>
                          </div>
                      </div>
                    </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <span className="title-font font-medium text-2xl text-gray-900">£ { product.price } </span>
                </div>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> { product.name } </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                    <MdStar className="text-orange"/>
                    <Link to={`/marketplace/products/reviews/${product._id}`} className="underline"> { product.comments.length === 1 ? `${product.comments.length} review` : `${product.comments.length} reviews` }</Link>
                </span>
              </div>
              <div> { parse(product.description) } </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              </div>  
            </div>
          </div>
            }
            <div className="rounded-full shadow-button inline-block">
                <div className="flex text-2xl">
                <button
                    className="border-r-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-full"
                    onClick= {() => setCount(Math.max(1, count - 1))}>
                    -
                </button>
                <h2 className="my-auto px-3 text-lg"> { count } </h2>
                <button
                  className="border-l-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-full"
                  onClick= {() => setCount(Math.min(20, count + 1))}>
                    +
                </button>
                </div>
              </div>

      <div className="grid gap-30">
        <Button className="bg-Blue text-Grey my-2">Buy now</Button>
        <button
          onClick={() => dispatch(addToCart(product._id , count ))}
          className="bg-Blue bg-opacity-20 text-Blue mb-2"
        >
          Add to Cart
        </button>
      </div>
      {!isAuthenticated && <SignInPop isOpen={isOpen} setIsOpen ={setIsOpen} />}
    </Card>
  );
};

export default SingleProduct;