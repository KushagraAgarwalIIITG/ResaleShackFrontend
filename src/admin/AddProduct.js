import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, createAd } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";
// This component is used to render a form for users to add products.
// This is rendered on a protected route, so the user is first authenticated then product is added. 

const AddProduct = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
    user: user._id
  });

  const {
    title,
    description,
    price,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,

  } = values;

  const preload = () => {
    getCategories().then(data => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createAd(user._id, token, formData).then(data => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          description: "",
          price: "",
          image: "",
          loading: false,
          createdProduct: data.ad.title
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    formData.set("user", user._id);
    console.log(createdProduct)
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <form>
      <span>Post image</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("image")}
            type="file"
            name="image"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("title")}
          name="image"
          className="form-control"
          placeholder="Title"
          value={title}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="image"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/user/dashboard" className="btn btn-md btn-dark mb-3">
        Go Back
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
