import React from 'react'
import OrderPage from '../components/orders/OrderPage'
import Comments from '../components/orders/Comments'
import RelatedProducts from '../components/orders/RelatedProducts'

const SingleOrder = () => {
    return (
        <>
          <OrderPage />
          <Comments />
          <RelatedProducts />
        </> 
    )
  }
    
  
export default SingleOrder
