import React, { useState, useEffect } from "react";
import { read, listRelated } from "../../marketplace/components/ApiCore";
import ProductCard from "../../marketplace/components/product/ProductCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import drink1 from "../../assets/drink.jpg";
import Card from "../../marketplace/components/card/Card";
import ShowImage from "../../marketplace/components/card/ShowImage";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((resp) => {
      const { data } = resp;
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data.category._id).then((resp) => {
          const { data } = resp;
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <section style={{ background: "white", width: "100%", overflow: "hidden" }}>
      <div className="md:flex border-b-2 ">
        <div className="w-full md:w-3/6 border-b-2 md:border-b-0 pb-4">
          <ul className="flex">
            <Swiper slidesPerView={1} spaceBetween={2} freeMode={true}>
              <SwiperSlide className="flex">
                <li>
                  <img src={drink1} alt="" />
                </li>
              </SwiperSlide>
              <SwiperSlide className="flex">
                <li>
                  <img src={drink1} alt="" />
                </li>
              </SwiperSlide>
              <SwiperSlide className="flex">
                <li>
                  <img src={drink1} alt="" />
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>
        <div>
          <div
            className="flex flex-col my-8 md:w-3/6
          
          "
          >
            <p>
              1850 By Folgers Sweet Cream Flavored Iced Coffee Beverage , 15
              Fluid Ounces (Pack of 12), Ready to Drink
            </p>
            <span className="text-blue-400">Visit Adidas store</span>
          </div>
          <div className="flex">
            <h1>Votes</h1>
            <div>+ 0 -</div>
          </div>

          <div>
            <h2>Reviews</h2>
            <div className="md:flex ">
              <div className="border-b-2 md:w-3/6 overflow-hidden">
                <ul className="flex">
                  <Swiper slidesPerView={6} spaceBetween={0} freeMode={true}>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                          {" "}
                          <a
                            href="#div"
                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                          >
                            {" "}
                            <img
                              src="https://i.imgur.com/aq39RMA.jpg"
                              class="rounded-full"
                              alt="status"
                              width="60"
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-3/6 ">
            <Tabs className="mt-8">
              <TabList>
                <Tab>About Item</Tab>
                <Tab>Product Description</Tab>
                <Tab>Product Details</Tab>
              </TabList>
              <TabPanel>blog items</TabPanel>
              <TabPanel>status items</TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1>Related Products</h1>
        {relatedProduct &&
          relatedProduct.map((item, i) => (
            <ProductCard product={item} key={i} />
          ))}
      </div>
    </section>
  );
};

export default Product;

// eslint-disable-next-line no-lone-blocks
{
  /* <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <ShowImage
              clase="bg-white lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              item={product}
              url={product.photo}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col">
        <h4>Related products</h4>
        {relatedProduct &&
          relatedProduct.map((p, i) => (
            <div key={i}>
              <Card product={p} />
            </div>
          ))}
      </div>  */
}
