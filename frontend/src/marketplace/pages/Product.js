import React, { useEffect, useState } from 'react'
import { read, listRelated } from '../components/ApiCore';
import SingleProduct from '../components/product/SingleProduct'
import ChatBox from '../components/product/ChatBox'
import Review from '../components/product/Review'
import CustomerQuestions from '../components/product/CustomerQuestions'
import RelatedProducts from '../components/product/RelatedProducts'
import ProductDescription from '../components/product/ProductDescription'

const Product = (props) => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };     

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    
    return (
        <>

            <SingleProduct
                product = { product.data }
            />
 
            <ProductDescription product= { product.data }/>

            <ChatBox />

            <Review/>

            <CustomerQuestions />

            <RelatedProducts  relatedProduct= {relatedProduct}/>

        </>
    )
}

export default Product
