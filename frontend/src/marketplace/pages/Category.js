import React, { useState, useEffect } from "react";
import CategoryProduct from '../components/product/CategoryProduct'
import { getFilteredProducts } from "../components/ApiCore";
import { getCategories} from "../../actions/categoryAction";
import {  fetchProductsByFilter, getProductsByCount, getProductByCategory } from "../../actions/productAction";
import { getSubs, getSubByCategory } from "../../actions/subCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import "../components/shop/Shop.scss";
import CategoryPop from '../components/category/CategoryPop'
import PopularSearch from "../components/category/PopularSearch";
import FilterDialogue from '../components/category/FilterDialogue'
import CategoryBanner from '../components/banner/CategoryBanner'
import Card from '../../components/Cards/Card'
import PopularStores from '../../marketplace/components/home/PopularStores';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NoProduct } from '../assets/icons'


  function shuffleArray(array) {
  let i = array?.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Shop = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const {productsByCategory} = useSelector((state) => state.product);

  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [ menu, setMenu ] = useState("")
   const [products, setProducts] = useState(productsByCategory);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([1, 200]);
  const [ok, setOk] = useState(false);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([
    "Apple",
    "Samsung",
    "Microsoft",
    "Lenovo",
    "ASUS",
  ]);
  const [brand, setBrand] = useState("");
  const [colors, setColors] = useState([
    "Black",
    "Brown",
    "Silver",
    "White",
    "Blue",
  ]);
  const [ category, setCategory ] = useState(false);
  const [ categoryName, setCategoryName ] = useState("")
  const [color, setColor] = useState("");
  const [shipping, setShipping] = useState("");

 let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    // fetch categories
    dispatch(getProductByCategory(props.match.params.categoryId));
     dispatch(getCategories());
     setCategory(props.match.params.categoryId)
     // fetch subcategories
    }, []);
    
    
  useEffect(() => {
    // fetch categories
     setProducts(productsByCategory);
     // fetch subcategories
    }, [productsByCategory]);
    

    useEffect(() => {
      if(category) {
    getSubByCategory(category).then((res) => setSubs(res.data));
    fetchProducts({ category });
      }
  }, [category]);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  console.log(categories)

  // 3. load products based on price range
  useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price });
  }, [ok]);

  // this filters by price
    const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setPrice(value);
    setStar("");
    setSub("");
    setBrand("");
    setColor("");
    setShipping("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };


  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([1, 200]);
    setStar("");
    setSub("");
    setBrand("");
    setColor("");
    setShipping("");
    // console.log(e.target.value);
    // console.log(inTheState);
  };

  console.log(price)

  // 5. show products by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar(num);
    setSub("");
    setBrand("");
    setColor("");
    setShipping("");
    fetchProducts({ stars: num });
  };

    const ShowSubs = () => (
          <div>
              <Swiper
              spaceBetween={20}
                  slidesPerView={4}
                  className="search "
                  freeMode = { true }
                  >
              {subs && subs.map((data, i) => (
              <SwiperSlide key={data._id}>
                  <div onClick={() => handleSub(data, i)} className= {`${ menu === data.name ? "bg-orange text-white " : "bg-white text-Black"} text-sm mx-1 whitespace-nowrap px-2 py-1 m-2 shadow-product rounded-md`}>
                    { data.name }
                  </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
    );

  const handleSub = (sub, i) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setMenu(sub.name)
    setStar("");
    setBrand("");
    setColor("");
    setShipping("");
    fetchProducts({ sub });
  };

  // 7. show products based on brand name
  const showBrands = () =>
    brands.map((b) => (
      <input
        type ="radio"
        key={b}
        value={b}
        name={b}
        checked={b === brand}
        onChange={handleBrand}
        className="pb-1 pl-4 pr-4"
      />
    ));

  const handleBrand = (e) => {
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar("");
    setColor("");
    setBrand(e.target.value);
    setShipping("");
    fetchProducts({ brand: e.target.value });
  };


  const CategoryMap = () => (
      <>
        {categories?.map((item) => (
           <div
             key={item.name}
             onClick = { () => handleCategory(item)}
             className="rounded-md items-center shadow-button p-2 -m-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            >
              <input type="hidden"
              onChange={handleCheck}
              className="pb-2 pl-4 pr-4"  
              value={item._id}
              name="category"
              />
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-orange-light sm:h-12 sm:w-12 text-2xl text-center m-auto">
              </div>
              <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
              </div>
            </div>
            ))}
      </>
  )

  const handleCategory = (item) => {
    setCategory(item._id);
    setCategoryName(item.name);
  }

  const noProductsFound = () => (
    <div className="my-2">
      <div className="mx-auto text-center">
        <NoProduct className="mx-auto"/>
      </div>
      <div className="my-3 text-lg text-center">
        No Products Found
      </div>
    </div>
  )


  return (

      <div>
        <div>
            <CategoryBanner />
        </div>       
        <div className="my-2 flex">
          <div>
            <CategoryPop>
              <CategoryMap /> 
            </CategoryPop>
          </div>
          <div className="ml-auto mr-2">
            <FilterDialogue 
                price ={price}
                handleSlider={handleSlider } />
          </div>
        </div>
          <div>
             <ShowSubs />
          </div>

          <Card title= {categoryName } >
            { products && products.length < 1 ? noProductsFound() : 
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
            {shuffleArray(products)?.map((p, i) => (
              <div key={p._id}>
                <CategoryProduct product={p} />
              </div>
            ))}
            </div>
            }  
          </Card>
      <PopularStores />
    </div>

  );
};

export default Shop;

