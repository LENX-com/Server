import React, { useEffect, useState } from 'react'
import { read, listRelated } from '../components/ApiCore';
import Stories from '../components/stories/Stories'
import SingleProduct from '../components/product/SingleProduct'
import ChatBox from '../components/product/ChatBox'

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
            <div className="mt-3 mb-6">
                <Stories />
            </div>

            <SingleProduct
                product = { product.data }
            />
 
            <ChatBox />
        </>
    )
}

export default Product
