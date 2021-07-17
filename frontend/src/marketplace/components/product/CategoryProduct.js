import React, { useState } from "react";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import { addItem, updateItem, removeItem } from "../cart/CartHelper";
import { addWishList } from "../../../actions/wishlistAction";
import { useDispatch } from "react-redux";
import Rating from 'react-rating'
import { MdStarBorder, MdStar, MdShoppingCart, MdFavoriteBorder} from 'react-icons/md'




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


  return (
    <Link to = {`products/${product._id}`}>
      <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-button h-32 md:h-44  p-2 ">
        <div className="w-3/5 bg-cover" style={{backgroundImage: `url("${product.photo}")`}} />
        <div className="w-2/5 p-4 md:p-4">
          <h1 className="text-base font-bold text-Black whitespace-nowrap overflow-ellipsis overflow-hidden "> { product.name }</h1>
          <div className="justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">£ { product.price }</h1>
          </div>
        </div>
      </div>
    </Link>
  );

};

export default ProductCard;


