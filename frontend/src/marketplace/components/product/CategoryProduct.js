import React, { useState } from "react";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import { addItem, updateItem, removeItem } from "../cart/CartHelper";
import { addWishList } from "../../../actions/wishlistAction";
import { useDispatch } from "react-redux";
import { AiFillStar } from 'react-icons/ai'




const ProductCard = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  rating = false
  // changeCartSize
}) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const { path, url } = useRouteMatch();
   
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`}>
          <button className="btn">View Product</button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
          Add to cart
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? <span> In Stock </span> : <span> Out of Stock </span>;
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn"
        >
          Remove Product
        </button>
      )
    );
  };

  const wishlist = (product) => {
    dispatch(addWishList(product));
  };

    const Like = () => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'RGBA(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'RGB(255, 255, 255)', strokeWidth: 2, overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
    )


  return (
    <Link to = {`/marketplace/products/${product._id}`}>
      <div className="shadow-product rounded-md ">
          <div className="relative rounded-md bg-cover bg-center h-36" style= {{background: `url("https://i.etsystatic.com/9524040/c/1257/999/360/1779/il/7a575e/2221507815/il_340x270.2221507815_hzle.jpg")`}}>
            <div className="absolute top-2 right-2">
                <Like className="text-2xl text-white" />
            </div>
          </div>
          <div className="p-2">
            <h1 className="truncate"> {product.name} </h1>
            <h3> £ {product.price} </h3>
            <div className="free-delivery">
                Free delivery
            </div>
            <div className="flex">
              <AiFillStar className="text-orange text-sm mr-1" />
              <div className="text-xs">
                4.9
              </div>
            </div>
          </div>
      </div>
    </Link>
  );

};

export default ProductCard;


