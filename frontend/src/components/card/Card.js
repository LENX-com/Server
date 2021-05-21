import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom' 
import ShowImage from './ShowImage'
import moment from 'moment'
import { addItem, updateItem, removeItem } from '../cart/CartHelper'
import './Card.scss'



const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {     
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
 
  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} >
          <button className="btn">View Product</button>
        </Link>
      )
    );
  };
  
const addToCart = () => {
    addItem(product, setRedirect(true));
  };
 
  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
 
  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn">
          Add to cart
        </button>
      )
    );
  };
 
  const showStock = quantity => {
    return quantity > 0 ? (
      <span> In Stock </span>
    ) : (
      <span> Out of Stock </span>
    );
  };
 
  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };
 
  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
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
  return (
    <div className="card ">
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage clase= "image-card" item={product} url="product" />
        <p className="card-p">{product.description.substring(0, 100)} </p>
        <p className="card-p">$ {product.price}</p>
        <p>Category: {product.category && product.category.name}</p>
        <p>Added on {moment(product.createdAt).fromNow()}</p>
        {showStock(product.quantity)}
        <br />
 
        {showViewButton(showViewProductButton)}
 
        {showAddToCartBtn(showAddToCartButton)}
 
        {showRemoveButton(showRemoveProductButton)}
 
        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};
 
export default Card;
