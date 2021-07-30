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
        <button onClick={addToCart} className="btn">
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
    <Link to = {`${path}/${product._id}`}>
    <div className=" bg-white rounded  shadow-button relative my-2">
        <div className="image rounded-lg overflow-hidden">
          <div className="p-3 my-2">
            <img src={product.photo} alt={product.name} />
          </div>
          <div className=" absolute top-3 right-1">
          <button className=" text-orange-light">
          <MdFavoriteBorder className="h-4 w-4" />
          </button>
          </div>
        </div>
        <div className="mt-2 text-center border-solid border-t-2 border-Grey py-2">
            <div>
              <h3 className="text-Black text-base"> { product.name } </h3>
            </div>

            <div>
            { rating ? <Rating
                    className="mt-2 text-base"
                    emptySymbol= { <MdStarBorder/> }
                    fullSymbol= { <MdStar/> }
                    readonly
                    initialRating={4.5}
                /> : null }
            </div>
            <div>
            <span className="text-gray-500 text-base">£ { product.price}</span>
            </div>
        </div>
    </div>
    </Link>
  );
};

export default ProductCard;


