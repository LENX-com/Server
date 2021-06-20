import React, { useEffect } from "react";
import {
  getProductsBySell,
  getProductsByArrival,
} from "../../actions/productAction";
import ProductCard from "../../marketplace/components/product/ProductCard";
import CategoryList from "../../marketplace/components/category/CategoryList";
import { getCategories } from "../../actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(getProductsBySell("sold"));
    dispatch(getProductsByArrival("createdAt"));
    dispatch(getCategories())
  }, []);


  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <h2 className="mb-4">New Arrivals</h2>
        <div className="flex flex-wrap -m-4">
          {product.productsByArrival &&
            product.productsByArrival.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <h2 className="mb-4">Best sellerss</h2>
        <div className="flex flex-wrap -m-4">
          {product.productsBySell &&
            product.productsBySell.map((product, i) => (
              <ProductCard dispatch={dispatch} product={product} key={i} />
            ))}
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <h2 className="mb-4">By arrival</h2>
        <div className="flex flex-wrap -m-4">
          {product.productsByArrival.map((product, i) => (
            <ProductCard dispatch={dispatch} product={product} key={i} />
          ))}
        </div>
      </div>
      <CategoryList />
    </>
  );
}

export default Home;
