import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, addToCart } from '../../actions/cartActions';  
import Card from '../../components/Cards/Card';
import Button from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";

const Basket = () => {
    const dispatch = useDispatch();
     const cart = useSelector((state) => state.cart.cartItems);

    const subtotalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
     const shippingPrice = cart.reduce((acc, item) => acc + item.qty * item.shippingPrice, 0).toFixed(2) 
     const totalPrice = Math.trunc(parseInt(subtotalPrice) + parseInt(shippingPrice))



      const Count = ({product}) => (
      <div className="rounded-full shadow-button inline-block">
                <div className="flex text-sm">
                <button
                    className="border-r border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-full"
                    onClick= { () => dispatch(addToCart(product.product, Math.max(1, product.qty - 1)))}>
                    -
                </button>
                <div className="my-auto px-3 text-xs"> { product.qty } </div>
                <button
                  className="border-l border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-full"
                  onClick= {() => dispatch(addToCart(product.product, Math.min(20, product.qty + 1)))}
                  >
                    +
                </button>
                </div>
                </div>
  )

  const Product = ({product}) => (
           <div className="my-4 relative bg-white rounded-md shadow-product max-w-md mx-auto overflow-hidden">
          <div className="flex dark:bg-gray-800 h-32 shadow-separator">
        <div className=" h-32 w-32 bg-cover bg-center rounded-sm" style={{backgroundImage: `url(${product.photo[0].url})`, backgroundColor:'#eee'}} />
        <div className="w-2/3 p-4 md:p-4">
          <Link to= {`/marketplace/products/${product.product}`} className="underline">
            <h1 className="text-base text-gray-800 dark:text-white truncate">{ product.name }</h1>
          </Link>  
            <div className="flex">
              <AiFillStar className="text-Blue text-sm mr-1" />
              <div className="text-xs">
                4.9
              </div>
            </div>
          <div className="free-delivery bg-transparent">
            Free Delivery
          </div>
          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-xl font-bold text-Black dark:text-gray-200 md:text-xl">£ {product.price} </h1>
          </div>
        </div>
      </div>
        <div className="flex justify-between p-2">
            <div className="text-base font-bold">
                <Count product= {product} />
            </div>
            <div>
                <Button onClick= {(e) => {
                  e.preventDefault();   
                  dispatch(removeCart(product.product))
                }}
                className=" text-sm">
                        Delete
                </Button>
            </div>
        </div>
      </div>
  )




    return (
        <div>
            <Card>
                { cart && cart.map((product => (
                    <Product product = { product } />
                  )))}
            </Card>
        </div>
    )
}

export default Basket
