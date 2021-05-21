import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom' 
import ShowImage from '../card/ShowImage'
import { addItem, updateItem, removeItem } from '../cart/CartHelper'



const ProductCard = ({
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
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <ShowImage clase="bg-white object-cover object-center w-full h-full block" item={product} url="product" />
      </a>
      <div className="mt-4">
        {shouldRedirect(redirect)}
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category && product.category.name}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
          <p className="mt-1">$ {product.price}</p>
          </div>
 
        {showViewButton(showViewProductButton)}
 
        {showAddToCartBtn(showAddToCartButton)}
 
        {showRemoveButton(showRemoveProductButton)}
 
        {showCartUpdateOptions(cartUpdate)}
    </div>
  );
};
 
export default ProductCard;
