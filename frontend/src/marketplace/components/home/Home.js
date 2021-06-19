import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getProducts } from "../ApiCore";
import Card from "../card/Card";
import Search from "../search/Search";

function Home() {
  const [producstBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProducstByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setProducstByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="home Page" description="LENX">
      <Search />
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card product={product} key={i} className="col" />
        ))}
      </div>

      <div className="row">
        <h2 className="title">Best sellers</h2>
        {producstBySell.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>

      <div className="row">
        <h2 className="title"> By arrival</h2>
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
