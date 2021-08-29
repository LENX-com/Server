import React, { useState, useEffect } from "react";
import Layout from "../marketplace/components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "./ApiAdmin";
import { getCategories } from "../actions/categoryAction";

const AddProduct = () => {
  const auth = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    file: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: new FormData(),
  });

  const {
    name,
    description,
    price,
    quantity,
    loading,
    error,
    createdProduct,
    formData,
  } = values;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (name) => (event) => {
    const value = name === "file" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();  
    setValues({ ...values, error: "", loading: true });

    createProduct(token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          file: "",
          price: "",
          quantity: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const newPostForm = () => (
    <form className="form" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn">
          <input
            onChange={handleChange("file")}
            type="file"
            name="file"
            accept="image/*"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Description</label>
        <textarea
          onChange={handleChange("description")}
          className="form-control"
          value={description}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          value={price}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Category</label>
        <select onChange={handleChange("category")} className="form-control">
          <option>Please select</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label className="text-muted">Shipping</label>
        <select onChange={handleChange("shipping")} className="form-control">
          <option>Please select</option>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-muted">Quantity</label>
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          value={quantity}
        />
      </div>
      <button className="btn btn-outline-primary">Create Product</button>
    </form>
  );

  const showError = () => (
    <div className="alert" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert" style={{ display: createdProduct ? "" : "none" }}>
      <h2>{`${createdProduct}`} is created!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="success">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <Layout
      title="Add a new product"
      description={`G'day ${auth.name}, ready to add a new product?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
