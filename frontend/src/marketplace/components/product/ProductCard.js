import React from "react";
import { Link,} from "react-router-dom";
import Rating from 'react-rating'
import { MdStarBorder, MdStar, MdShoppingCart, MdFavoriteBorder} from 'react-icons/md'

const ProductCard = ({
  product,
  setRun = (f) => f,
  run = undefined,
  rating = false
  // changeCartSize
}) => {



  return (
    <Link to = {`/marketplace/category/products/${product._id}`}>
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


