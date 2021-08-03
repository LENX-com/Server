// import React, { useState } from "react";
// import {
//   MdStar,
//   MdFavoriteBorder,
//   MdArrowBack,
// } from "react-icons/md";
// import Card from "../../../components/Cards/Card";
// import Button from "../../../components/Buttons/Button";
// import { addToCart} from "../../../actions/cartActions";
// import { useDispatch } from "react-redux";
// import { Link, useHistory} from "react-router-dom";

// const SingleProduct = ({ product }) => {
//   const [count, setCount] = useState(0);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const options = Array.from(Array(15).keys());


//   return (
//     <Card className="py-8 mx-auto">
//       {product && (
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <div className="relative lg:w-1/2 w-full lg:h-auto rounded">
//             <img
//               alt="ecommerce"
//               className="object-cover object-center "
//               src={product.photo}
//             />
//             <div className=" absolute top-2 left-0">
//               <div className="flex">
//                 <button
//                   className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
//                   onClick={() => setTimeout(() => history.goBack(), 150)}
//                 >
//                   <MdArrowBack className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//             <div className=" absolute top-2 right-1">
//               <div className="flex">
//                 <button className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4">
//                   <MdFavoriteBorder className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {" "}
//               {product.name}{" "}
//             </h1>
//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 <MdStar className="text-orange" />
//                 <Link
//                   to={`/marketplace/category/products/reviews/${product._id}`}
//                   className="underline"
//                 >
//                   {" "}
//                   240 reviews
//                 </Link>
//               </span>
//             </div>
//             <p className="leading-relaxed"> {product.description} </p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <div className="flex ml-6 items-center">
//                 <span className="mr-3"> Quantity </span>
//                 <div className="relative">
//                   <select className="rounded border appearance-none border-gray-300 shadow-button py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                     {options.map((data) => (
//                       <option> {data} </option>
//                     ))}
//                   </select>
//                   <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-4 h-4"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 9l6 6 6-6" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 £ {product.price}{" "}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="rounded-full shadow-button p-2 inline-block">
//         <div className="flex text-2xl">
//           <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
//           <h2 className="my-auto"> {count} </h2>
//           <button onClick={() => setCount(Math.min(20, count + 1))}>+</button>
//         </div>
//       </div>
//       <div className="grid gap-30">
//         <Button className="bg-Blue text-Grey my-2">Buy now</Button>
//         <button
//           onClick={() => dispatch(addToCart(product._id , 3 ))}
//           className="bg-Blue bg-opacity-20 text-Blue mb-2"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </Card>
//   );
// };

// export default SingleProduct;
import React, { useState } from "react";
import {
  MdStarBorder,
  MdStar,
  MdShoppingCart,
  MdFavoriteBorder,
  MdArrowBack,
} from "react-icons/md";
import Card from "../../../components/Cards/Card";
import Button from "../../../components/Buttons/Button";
import { addToCart} from "../../../actions/cartActions";
import { useDispatch } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

const SingleProduct = ({ product}) => {
    const [ count, setCount ] = useState(1)
    const history = useHistory();
    const options =  Array.from(Array(15).keys())
    const dispatch = useDispatch();

  const { url } = useRouteMatch();

    return (
             
          <Card className="py-8 mx-auto">  
          {product &&
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="relative lg:w-1/2 w-full lg:h-auto rounded">
                <img alt="ecommerce" className="object-cover object-center " src= { product.photo } />
                    <div className=" absolute top-2 left-0">
                        <div className="flex">
                            <button
                            className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                            onClick={() => setTimeout(() => history.goBack(), 150)}>
                                <MdArrowBack className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                    <div className=" absolute top-2 right-1">
                        <div className="flex">
                            <button className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                                <MdFavoriteBorder className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <span className="title-font font-medium text-2xl text-gray-900">£ { product.price } </span>
                </div>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> { product.name } </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                    <MdStar className="text-orange"/>
                    <Link to={`/marketplace/category/products/reviews/${product._id}`} className="underline"> 240 reviews</Link>
                </span>
              </div>
              <p className="leading-relaxed"> { product.description } </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              </div>
            </div>
          </div>
            }
            <div className="rounded-full shadow-button inline-block">
                <div className="flex text-2xl">
                <button
                    className="border-r-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-full"
                    onClick= {() => setCount(Math.max(1, count - 1))}>
                    -
                </button>
                <h2 className="my-auto px-3 text-lg"> { count } </h2>
                <button
                  className="border-l-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-full"
                  onClick= {() => setCount(Math.min(20, count + 1))}>
                    +
                </button>
                </div>
              </div>

      <div className="grid gap-30">
        <Button className="bg-Blue text-Grey my-2">Buy now</Button>
        <button
          onClick={() => dispatch(addToCart(product._id , count ))}
          className="bg-Blue bg-opacity-20 text-Blue mb-2"
        >
          Add to Cart
        </button>
      </div>
    </Card>
  );
};

export default SingleProduct;
