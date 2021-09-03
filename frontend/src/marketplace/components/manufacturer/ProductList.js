import React from "react";
import ProductCard from "../product/ProductCard";
import Card from "../../../components/Cards/Card";
import { Menu } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Filter } from "../../assets/icons";
import { FaCat } from "react-icons/fa";
import SearchBar from "../../../components/searchbar/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = () => {
  //   const [products, setProducts] = useState(false);
  const manufacturerProducts = useSelector((state) => state.user.manufacturer);

  const fakeArray = Array(5).fill(5);

  const Dropdown = () => {
    return (
      <Menu as="div" className="h-10 z-50">
        <Menu.Button className=" bg-Grey p-2 inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange">
          <Filter />
        </Menu.Button>

        {/* Render a `ul` instead of a `div` */}
        <Menu.Items
          as="ul"
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {/* Render an `li` instead of no wrapper element */}
          <Menu.Item as="li" className="p-2">
            {({ active }) => (
              <div
                className={`${active && "bg-blue-500"} p-1 hover:bg-gray-50`}
              >
                Most Recent
              </div>
            )}
          </Menu.Item>
          <Menu.Item
            as="li"
            className="p-2 border-t-2 border-b-2 border-Grey-border"
          >
            {({ active }) => (
              <div
                className={`${active && "bg-blue-500"}  p-1 hover:bg-gray-50`}
              >
                Lowest Prices
              </div>
            )}
          </Menu.Item>
          <Menu.Item as="li" className="p-2">
            {({ active }) => (
              <div
                className={`${active && "bg-blue-500"} p-1 hover:bg-gray-50`}
              >
                Highest Prices
              </div>
            )}
          </Menu.Item>
          {/* ... */}
        </Menu.Items>
      </Menu>
    );
  };
  const CategoriesTag = () => {
    return (
      <Swiper spaceBetween={0} slidesPerView={3} freeMode={true}>
        {manufacturerProducts &&
          manufacturerProducts.categories?.map((data) => (
            <SwiperSlide className="w-auto">
              <div>
                <div className=" bg-Grey-sd px-2 py-1 m-2 rounded-md ">
                  {data.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    );
  };

  return (
    <Card>
      <div className="flex">
        <div className="w-4/5 pr-2">
          <SearchBar placeholder="Search products" />
        </div>
        <div className="h-12 z-50">
          <Dropdown />
        </div>
      </div>

      <div>
        <CategoriesTag />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {manufacturerProducts && manufacturerProducts.products.length > 0 ? (
          manufacturerProducts.products.map((product) => (
            <ProductCard product={product} />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
          >
            <p className="mb-2">No Product Found</p>
            <FaCat color="blue" size={100} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductList;