/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { getCategory } from "../../actions/categoryAction";
import ProductCard from "../../marketplace/components/product/ProductCard";
import { getFilteredProducts} from '../../marketplace/components/ApiCore'
import RadioBox from '../../marketplace/components/shop/RadioBox'
import {prices} from '../../marketplace/components/shop/FixedPrices'
import Checkbox from '../../marketplace/components/checkbox/Checkbox'


const CategoryHome = ({ match }) => {
  const [myFilters, setMyFilters] = useState({
    filters: { price: [] },
  });

  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = match.params;

  const init = () => {
    setLoading(true);
    getCategory(id).then((res) => {
      setCategory(res.category);
      setProducts(res.products);
      setLoading(false);
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      console.log(data);
      // if (data.error) {
      //     setError(data.error);
      // } else {
      //     setFilteredResults(data.data);
      //     setSize(data.size);
      //     setSkip(0);
      // }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      console.log(data);
      // if (data.error) {
      //     setError(data.error);
      // } else {
      //     setFilteredResults([...filteredResults, ...data.data]);
      //     setSize(data.size);
      //     setSkip(toSkip);
      // }
    });
  };

  // eslint-disable-next-line no-unused-vars
  const loadMoreButton = () => {
    return (
      size > 0 && size >= limit && <button onClick={loadMore}>Load more</button>
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products && products.length} Products in "{category && category.name}" category
            </h4>
          )}
        </div>
      </div>
      <ul>
        <input
          categories={category}
          handleFilters={(filters) => handleFilters(filters, "category")}
        />
      </ul>

      <div>
        <RadioBox
          prices={prices}
          handleFilters={(filters) => handleFilters(filters, "price")}
        />
      </div>
      <div className="row">
        {filteredResults.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            {console.log(filteredResults)}
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div>
        {products &&
          products.map((p) => (
            <div key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryHome;
