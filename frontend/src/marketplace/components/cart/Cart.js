// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../layout/Layout";
// import { getCart } from "./CartHelper";
// import Card from "../card/Card";
// import Checkout from "../checkout/Checkout";

// const Cart = () => {
//   const [items, setItems] = useState([]);
//   // const [cartSize, setCartSize] = useState([]);
//   const [run, setRun] = useState(false);

//   useEffect(() => {
//     console.log("MAX DEPTH ...");
//     setItems(getCart());
//   }, [run]);

//   const showItems = (items) => {
//     return (
//       <div>
//         <h2>Your cart has {`${items.length}`} items</h2>
//         <hr />
//         {items.map((product, i) => (
//           <Card
//             key={i}
//             product={product}
//             showAddToCartButton={false}
//             cartUpdate={true}
//             showRemoveProductButton={true}
//             setRun={setRun}
//             run={run}
//             // changeCartSize={changeCartSize}
//           />
//         ))}
//       </div>
//     );
//   };

//   const noItemsMessage = () => (
//     <h2>
//       Your Cart is empty. <br />
//       <Link to="/shop"> Continue shopping. </Link>
//     </h2>
//   );

//   return (
//     <Layout
//       title="Shopping Cart"
//       description="Checkout now!"
//       className="container-fluid"
//     >
//       <div className="row">
//         <div className="col-6">
//           {items.length > 0 ? showItems(items) : noItemsMessage()}
//         </div>
//         <div className="col-6">
//           <h2 className="mb-4">Your Cart Summary</h2>
//           <hr />
//         </div>
//         <button><Link to="/checkout"></Link>Checkout now</button>
//       </div>
//     </Layout>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import { addToCart, removeCart } from "../../../actions/cartActions";
import { useDispatch } from "react-redux";

export default function Cart(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const handleRemoveCart = () => {
    dispatch(removeCart());
  };

  return (
    <div>
      <h1>My cart</h1>
    </div>
  );
}
