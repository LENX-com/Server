import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/product/SingleProduct'
import ChatBox from '../components/product/ChatBox'
import Review from '../components/product/Review'
import CustomerQuestions from '../components/product/CustomerQuestions'
import RelatedProducts from '../components/product/RelatedProducts'
import ProductDescription from '../components/product/ProductDescription'
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import '../styles/product.scss'

const Product = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  


  //changed api endpoint to redux
  useEffect(() => {
    const productId = props.match.params.productId;
    dispatch(getProduct(productId));
  }, [props, dispatch]);

    
    return (
        <>

            {product &&
            <>
            <SingleProduct
                product = { product }
            />
 
            <ProductDescription product= { product }/>
            <ChatBox/>

            {/* If comment is less than 1, do not show comments */}
            {product.comments.length < 1 ? null :
              < Review comments = {product.comments} id = { product._id} / >
            }
            
            <CustomerQuestions />
            
            <RelatedProducts  relatedProduct= {relatedProduct}/>

            </>  
            }
            

        </>
    )
}


export default Product;
