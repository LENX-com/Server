import React, { useState, useEffect } from 'react'
import Product from '../components/review/Product'
import ReviewSearch from '../components/review/ReviewSearch'
import Comment from '../components/review/Comment'
import { read  } from '../components/ApiCore';
import { useHistory } from 'react-router-dom'
import {  MdArrowBack } from 'react-icons/md'


const ProductReview = (props) => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    
     const history = useHistory();

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
            }
        });
    };   
  
    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    console.log(product.data)


    return (
        <>
            { product &&
                <div>
                    <div className="my-3">
                        <button
                            className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                            onClick={() => setTimeout(() => history.goBack(), 150)}>
                            <MdArrowBack className="w-5 h-5"/>
                        </button>
                    </div>
                    <ReviewSearch product = { product.data }/>
           
                    <Product product= { product.data }/>

                    <Comment comments = { product.data } />

                </div>
            }
        </>
    )
}

export default ProductReview
   