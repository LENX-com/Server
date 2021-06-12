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

export default function Checkout({
  products,
  setRun = (f) => f,
  run = undefined,
}) {
  const [processOne, setProcess] = useState(false);
  const [processTwo, setTTwo] = useState(false);
  const [processThree, setPThree] = useState(false);
  const [cardShow, setCardshow] = useState(false);

  const Payments = () => (
    <div>
      <p className="text-gray-800 font-semibold mt-4">Choose payment method</p>
      <p>
        You will not be charged until you review this order in the next page
      </p>
      <div>
        <div className="flex py-2 justify-between items-center border border-l-0 border-r-0 border-gray-200">
          <div>
            <input
              type="radio"
              id="card"
              name="card"
              checked={cardShow}
              onClick={()=> setCardshow(!cardShow)}
            />
            <label htmlFor="card" id="card">
              Card
            </label>
          </div>
          <div className="flex">
            <img
              alt="visa"
              src="https://img.icons8.com/color/48/000000/visa.png"
            />
            <img
              alt="master"
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
            />
          </div>
        </div>

        {cardShow && ( 
          <form className="border-b border-gray-200">
            <div>
              <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mt-3">
                Name<span className="text-red-400">*</span>
              </div>
              <div className="flex flex-col">
                <div className="w-full flex-1 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="First Name"
                      className="p-1 px-2 mx-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
                <div className="w-full flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Card<span className="text-red-400">*</span>
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Just a hint.."
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Your Email
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="jhon@doe.com"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 mb-4">
              <button
                className="text-base w-full hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-gray-200  
      bg-gray-100 
      text-gray-700 
      border duration-200 ease-in-out 
      border-gray-600 transition"
      onClick={() => setTTwo(true)}
              >
                Review your Order
              </button>
            </div>
          </form>
         )}
      </div>
      <div className="flex justify-between py-2 items-center border-b border-gray-200">
        <div>
          <input type="radio" id="paypal" />
          <label htmlFor="paypal" id="paypal">
           Pay with Paypal
          </label>
        </div>
        <div>
          <img
            alt="paypal"
            src="https://img.icons8.com/color/48/000000/paypal.png"
          />
        </div>
      </div>
      <div className="py-2 border-b border-gray-200">
        <input type="radio" id="newcard" />
        <label htmlFor="newcard" id="newcard">
          Add a new card
        </label>
      </div>
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
      <div className="custom-line flex justify-between w-3/4 m-auto mt-8 ">
        <div className="custom-line2 flex flex-col items-center justify-center">
          <div className="flex  ">
            <div
              className="bg-blue-400 rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setProcess(false)}
            >
              {processOne ? <AiOutlineCheck color="white" /> : 1}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium" style={{ fontSize: "16px" }}>
              Shipping
            </p>
            <p style={{ fontSize: "12px" }} className="-mt-4">
              Address Input
            </p>
          </div>
        </div>
        <div className="custom-line2   flex flex-col items-center justify-center">
          <div className="flex">
            <div
              className="bg-blue-400 rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setTTwo(false)}
            >
              {processTwo ? <AiOutlineCheck color="white" /> : 2}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium" style={{ fontSize: "16px" }}>
              Payments
            </p>
            <p style={{ fontSize: "12px" }} className="-mt-4">
              Financial info
            </p>
          </div>
        </div>
        <div className="flex custom-line3  flex-col items-center justify-center">
          <div className="flex">
            <div
              className="bg-blue-400  rounded-full h-5 w-5  grid justify-items-center items-center cursor-pointer"
              onClick={() => setPThree(false)}
            >
              {processThree ? <AiOutlineCheck color="white" /> : 3}
            </div>
          </div>
          <div className="flex flex-col items-center">
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
    <div className="md:w-3/6 m-auto ">
      <ProcessHeader />
      <div className="max-w-xl  p-4 bg-white rounded shadow-xl">
        {!processOne ? (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mt-3">
                <p className="text-gray-800 font-semibold mt-4">
                  Customer information
                </p>
                Country<span className="text-red-400">*</span>
              </div>
              <div className="flex flex-col">
                <div className="w-full flex-1 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="First Name"
                      className="p-1 px-2 mx-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
                <div className="w-full flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Full name<span className="text-red-400">*</span>
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Just a hint.."
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Street Address
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="jhon@doe.com"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Apt / Suite / Other
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="jhon@doe.com"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    City
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="jhon@doe.com"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Postal code <small>(optional)</small>
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder=""
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="w-full flex-1 svelte-1l8159u">
                  <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    State <small>(optional)</small>
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder=""
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <button
                className="text-base w-full hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
                onClick={handleProcessClick}
              >
                Review your Order
              </button>
            </div>
          </form>
        ) : !processTwo ? (
          <Payments />
        ) : !processThree ? (
          <ReviewOrder />
        ) : (
          "check out done"
        )}
      </div>
    </div>
  );
}
