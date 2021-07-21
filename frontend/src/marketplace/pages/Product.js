import React, { useEffect, useState } from "react";
import { read, listRelated } from "../components/ApiCore";
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Stories from "../components/stories/Stories";
import SingleProduct from "../components/product/SingleProduct";
import ChatBox from "../components/product/ChatBox";

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
      }
    });
  };

  //changed api endpoint to redux
  useEffect(() => {
    const productId = props.match.params.productId;
    dispatch(getProduct(productId));
  }, [props, dispatch]);

  return (
    <>
      <div className="mt-3 mb-6">
        <Stories />
      </div>

      <SingleProduct product={product} />

      <ChatBox />
    </>
  );
};

export default Product;
