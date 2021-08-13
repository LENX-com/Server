import React, { useState, useEffect } from "react";
import Layout from "../marketplace/components/layout/Layout";
import { Redirect } from "react-router-dom";
import { updateProduct, getProduct } from "../actions/productAction";
import { getCategories } from "../actions/categoryAction";
import { useSelector, useDispatch } from "react-redux";

const UpdateProduct = ({ match }) => {
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
    error: false,
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });
  const auth = useSelector((state) => state.auth.user);
  const categoryy = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const {
    name,
    description,
    price,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  useEffect(() => {
    dispatch(getProduct(match.params.productId));
    dispatch(getCategories());
  }, [dispatch, match.params.productId]);

  const handleChange = (name) => (event) => {
    const value = name === "file" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    dispatch(updateProduct(match.params.productId, formData));
  };

  const newPostForm = () => (
    <form onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div>
        <label>
          <input
            onChange={handleChange("file")}
            type="file"
            name="file"
            accept="image/*"
          />
        </label>
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          onChange={handleChange("description")}
          className="form-control"
          value={description}
        />
      </div>

      <div>
        <label>Price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          value={price}
        />
      </div>

      <div>
        <label>Category</label>
        <select onChange={handleChange("category")}>
          <option>Please select</option>
          {categoryy &&
            categoryy.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Shipping</label>
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

      <button>Update Product</button>
    </form>
  );

  const showError = () => (
    <div style={{ display: error ? "" : "none" }}>{error}</div>
  );

  const showSuccess = () => (
    <div style={{ display: createdProduct ? "" : "none" }}>
      <h2>{`${createdProduct}`} is updated!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to="/" />;
      }
    }
  };

  return (
    <Layout
      title="Add a new product"
      description={`Hello ${auth.name}, ready to add a new product?`}
    >
      <div className="row">
        <div>
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
          {redirectUser()}
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
