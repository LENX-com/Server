import React, { useState, useEffect } from 'react'
import Product from '../components/review/Product'
import PageTitle from '../../components/Typography/PageTitle'
import ReviewSearch from '../components/review/ReviewSearch'
import { read, } from '../components/ApiCore';
import { MdStar} from 'react-icons/md'

const ProductReview = (props) => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

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


    return (
        <div>
           <Product product= { product.data }/>

           <ReviewSearch />

           <PageTitle> 
                    <MdStar className="text-orange"/>
                    240 reviews
            </PageTitle>
        </div>
    )
}

export default ProductReview
   