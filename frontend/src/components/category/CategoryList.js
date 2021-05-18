import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/categoryAction";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      console.log(c)
      setCategories(c);
      setLoading(false);
    }); 
  }, []);
  

  const showCategories = () =>
    categories.map((c) => (  
      <div
        key={c._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/category/${c._id}`}>{c.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;