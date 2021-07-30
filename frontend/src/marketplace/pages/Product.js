<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { read, listRelated } from '../components/ApiCore';
import SingleProduct from '../components/product/SingleProduct'
import ChatBox from '../components/product/ChatBox'
import Review from '../components/product/Review'
import CustomerQuestions from '../components/product/CustomerQuestions'
import RelatedProducts from '../components/product/RelatedProducts'
import ProductDescription from '../components/product/ProductDescription'
||||||| 942a279
import React, { useEffect, useState } from 'react'
import { read, listRelated } from '../components/ApiCore';
import Stories from '../components/stories/Stories'
import SingleProduct from '../components/product/SingleProduct'
import ChatBox from '../components/product/ChatBox'
=======
import React, { useEffect, useState } from "react";
import { read, listRelated } from "../components/ApiCore";
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Stories from "../components/stories/Stories";
import SingleProduct from "../components/product/SingleProduct";
import ChatBox from "../components/product/ChatBox";
>>>>>>> e4917cbb9d552960a905005267df8ca00a8c8612

const Product = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [productss, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
<<<<<<< HEAD
    };     
||||||| 942a279
    };   
=======
      }
    });
  };
>>>>>>> e4917cbb9d552960a905005267df8ca00a8c8612

  //changed api endpoint to redux
  useEffect(() => {
    const productId = props.match.params.productId;
    dispatch(getProduct(productId));
  }, [props, dispatch]);

<<<<<<< HEAD
    
    return (
        <>
||||||| 942a279
    
    return (
        <>
            <div className="mt-3 mb-6">
                <Stories />
            </div>
=======
  return (
    <>
      <div className="mt-3 mb-6">
        <Stories />
      </div>
>>>>>>> e4917cbb9d552960a905005267df8ca00a8c8612

<<<<<<< HEAD
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
||||||| 942a279
            <SingleProduct
                product = { product.data }
            />
 
            <ChatBox />
        </>
    )
}
=======
      <SingleProduct product={product} />
>>>>>>> e4917cbb9d552960a905005267df8ca00a8c8612

      <ChatBox />
    </>
  );
};

export default Product;
