// import React, { useState, useEffect } from 'react';
// import { getProducts, getBraintreeClientToken, processPayment, createOrder } from '../ApiCore';
// import { emptyCart } from '../cart/CartHelper';
// import Card from '../card/Card';
// import { isAuthenticated } from '../../../actions';
// import { Link } from 'react-router-dom';
// import DropIn from 'braintree-web-drop-in-react';

// const Checkout = ({ products, setRun = f => f, run = undefined }) => {
//     const [data, setData] = useState({
//         loading: false,
//         success: false,
//         clientToken: null,
//         error: '',
//         instance: {},
//         address: ''
//     });

//     const userId = isAuthenticated() && isAuthenticated().user._id;
//     const token = isAuthenticated() && isAuthenticated().token;

//     const getToken = (userId, token) => {
//         getBraintreeClientToken(userId, token).then(data => {
//             if (data.error) {
//                 console.log(data.error);
//                 setData({ ...data, error: data.error });
//             } else {
//                 console.log(data);
//                 setData({ clientToken: data.clientToken });
//             }
//         });
//     };

//     useEffect(() => {
//         getToken(userId, token);
//     }, []);

//     const handleAddress = event => {
//         setData({ ...data, address: event.target.value });
//     };

//     const getTotal = () => {
//         return products.reduce((currentValue, nextValue) => {
//             return currentValue + nextValue.count * nextValue.price;
//         }, 0);
//     };

//     const showCheckout = () => {
//         return isAuthenticated() ? (
//             <div>{showDropIn()}</div>
//         ) : (
//             <Link to="/signin">
//                 <button className="btn btn-primary">Sign in to checkout</button>
//             </Link>
//         );
//     };

//     let deliveryAddress = data.address;

//     const buy = () => {
//         setData({ loading: true });
//         // send the nonce to your server
//         // nonce = data.instance.requestPaymentMethod()
//         let nonce;
//         let getNonce = data.instance
//             .requestPaymentMethod()
//             .then(data => {
//                 // console.log(data);
//                 nonce = data.nonce;
//                 // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
//                 // and also total to be charged
//                 // console.log(
//                 //     "send nonce and total to process: ",
//                 //     nonce,
//                 //     getTotal(products)
//                 // );
//                 const paymentData = {
//                     paymentMethodNonce: nonce,
//                     amount: getTotal(products)
//                 };

//                 processPayment(userId, token, paymentData)
//                     .then(response => {
//                         console.log(response);
//                         // empty cart
//                         // create order

//                         const createOrderData = {
//                             products: products,
//                             transaction_id: response.transaction.id,
//                             amount: response.transaction.amount,
//                             address: deliveryAddress
//                         };

//                         createOrder(userId, token, createOrderData)
//                             .then(response => {
//                                 emptyCart(() => {
//                                     setRun(!run); // run useEffect in parent Cart
//                                     console.log('payment success and empty cart');
//                                     setData({
//                                         loading: false,
//                                         success: true
//                                     });
//                                 });
//                             })
//                             .catch(error => {
//                                 console.log(error);
//                                 setData({ loading: false });
//                             });
//                     })
//                     .catch(error => {
//                         console.log(error);
//                         setData({ loading: false });
//                     });
//             })
//             .catch(error => {
//                 // console.log("dropin error: ", error);
//                 setData({ ...data, error: error.message });
//             });
//     };

//     const showDropIn = () => (
//         <div onBlur={() => setData({ ...data, error: '' })}>
//             {data.clientToken !== null && products.length > 0 ? (
//                 <div>
//                     <div className="gorm-group mb-3">
//                         <label className="text-muted">Delivery address:</label>
//                         <textarea
//                             onChange={handleAddress}
//                             className="form-control"
//                             value={data.address}
//                             placeholder="Type your delivery address here..."
//                         />
//                     </div>

//                     <DropIn
//                         options={{
//                             authorization: data.clientToken,
//                             paypal: {
//                                 flow: 'vault'
//                             }
//                         }}
//                         onInstance={instance => (data.instance = instance)}
//                     />
//                     <button onClick={buy} className="btn btn-success btn-block">
//                         Pay
//                     </button>
//                 </div>
//             ) : null}
//         </div>
//     );

//     const showError = error => (
//         <div className="alert" style={{ display: error ? '' : 'none' }}>
//             {error}
//         </div>
//     );

//     const showSuccess = success => (
//         <div className="alert" style={{ display: success ? '' : 'none' }}>
//             Thanks! Your payment was successful!
//         </div>
//     );

//     const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

//     return (
//         <div>
//             <h2>Total: ${getTotal()}</h2>
//             {showLoading(data.loading)}
//             {showSuccess(data.success)}
//             {showError(data.error)}
//             {showCheckout()}
//         </div>
//     );
// };

// export default Checkout;

// AiOutlineCheck
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function Checkout() {
  const [processOne, setProcess] = useState(false);
  const [processTwo, setTTwo] = useState(false);
  const [processThree, setPThree] = useState(false);
  const Shipping = () => (
    <div>
      <p>shipping container</p>
      <button onClick={() => setTTwo(true)}>submit</button>
    </div>
  );
  const ReviewOrder = () => (
    <div>
      <p>Review order</p>
      <button onClick={() => setPThree(true)}>submit</button>
    </div>
  );

  const handleProcessClick = () => {
    setProcess(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ProcessHeader = () => (
    <div>
      <div className="flex justify-between w-3/4 m-auto mt-8 ">
        <div
          className="custom-line flex flex-col items-center justify-center"
        >
          <div className="flex  ">
            <div
              className="bg-blue-400 rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setProcess(false)}
            >
              {processOne ? <AiOutlineCheck color="white" /> : 1}
            </div>
          </div>
          <div
             className="flex flex-col items-center"
          >
            <p className="font-medium" style={{ fontSize: "16px" }}>
              Shipping
            </p>
            <p style={{ fontSize: "12px" }} className="-mt-4">
              Address Input
            </p>
          </div>
        </div>
        <div
          className="custom-line2 flex flex-col items-center justify-center"
        >
          <div className="flex">
            <div
              className="bg-blue-400 rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setTTwo(false)}
            >
              {processTwo ? <AiOutlineCheck color="white" /> : 2}
            </div>
          </div>
          <div
            className="flex flex-col items-center"
          >
            <p className="font-medium" style={{ fontSize: "16px" }}>
              Payments
            </p>
            <p style={{ fontSize: "12px" }} className="-mt-4">
              Financial info
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center"
        >
          <div className="flex">
            <div
              className="bg-blue-400 rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setPThree(false)}
            >
              {processThree ? <AiOutlineCheck color="white" /> : 3}
            </div>
          </div>
          <div
            className="flex flex-col items-center"
          >
            <p className="font-medium" style={{ fontSize: "16px" }}>
              Review
            </p>
            <p style={{ fontSize: "12px" }} className="-mt-4">
              Check Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-xl ">
      <ProcessHeader />
      <div>
        {!processOne ? (
          <form
            className="max-w-xl m-4 p-4 bg-white rounded shadow-xl"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-800 font-semibold mt-8">
              Customer information
            </p>
            <div className="">
              <label className="block text-sm text-gray-00" htmlFor="cus_name">
                Name
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Email
              </label>
              <input
                className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>
            <div className="mt-2">
              <label
                className=" block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Address
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Street"
                aria-label="Email"
              />
            </div>
            <div className="mt-2">
              <label
                className="hidden text-sm block text-gray-600"
                htmlFor="cus_email"
              >
                City
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="City"
                aria-label="Email"
              />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label
                className="hidden block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Country
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Country"
                aria-label="Email"
              />
            </div>
            <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label
                className="hidden block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Zip
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                aria-label="Email"
              />
            </div>
            <div className="mt-4">
              <button
                className="px-4 py-1 text-white bg-blue-400 font-light tracking-wider w-fulls rounded"
                type="submit"
                onClick={handleProcessClick}
              >
                Continue
              </button>
            </div>
          </form>
        ) : !processTwo ? (
          <Shipping />
        ) : !processThree ? (
          <ReviewOrder />
        ) : (
          "check out done"
        )}
      </div>
    </div>
  );
}
